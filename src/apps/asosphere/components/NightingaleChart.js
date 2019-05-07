// @flow

import React from "react";
import * as d3 from "d3";
import { trackIds, milestones, tracks, categoryColorScale } from "../constants";
import type { TrackId, Milestone, MilestoneMap } from "../constants";
import { allTrue } from "./helpers";

const width = 650;
const arcMilestones = milestones.slice(1); // we'll draw the '0' milestone with a circle, not an arc.

type Props = {
  milestoneByTrack: MilestoneMap,
  focusedTrackId: TrackId,
  handleTrackMilestoneChangeFn: (TrackId, Milestone) => void,
  focusedMilestoneId: Milestone,
  milestoneCheckboxes: object
};

class NightingaleChart extends React.Component<Props> {
  colorScale: any;
  radiusScale: any;
  arcFn: any;

  constructor(props: *) {
    super(props);

    this.colorScale = d3.scaleSequential(d3.interpolateWarm).domain([0, 5]);

    this.radiusScale = d3
      .scaleBand()
      .domain(arcMilestones)
      .range([0.15 * width, 0.45 * width])
      .paddingInner(0.1);

    this.arcFn = d3
      .arc()
      .innerRadius(milestone => this.radiusScale(milestone))
      .outerRadius(
        milestone => this.radiusScale(milestone) + this.radiusScale.bandwidth()
      )
      .startAngle(-Math.PI / trackIds.length)
      .endAngle(Math.PI / trackIds.length)
      .padAngle(Math.PI / 200)
      .padRadius(0.45 * width)
      .cornerRadius(5);

    this.textArcFn = d3
      .arc()
      .innerRadius(width/2.2)
      .outerRadius(width/2.19)
      .startAngle(-Math.PI / trackIds.length)
      .endAngle(Math.PI / trackIds.length)
      .padAngle(Math.PI / 200)
      .padRadius(0.45 * width);
  }

  addText(ref) {
    var path = d3.select(ref);
    var arc = path.attr("d");
    var firstArcSection = /(^.+?)L/; 
    var newArc = /(^.+?)L/.exec(arc)[1];

    var index = parseInt(path.attr("data-index"));
    var needsFlip = index > 5 && index < 13;
    if (needsFlip) {
      var startLoc 	= /M(.*?)A/,
          middleLoc 	= /A(.*?)0,0,1/,
          endLoc 		= /0,0,1,(.*?)$/;
      var newStart = endLoc.exec( newArc )[1];
      var newEnd = startLoc.exec( newArc )[1];
      var middleSec = middleLoc.exec( newArc )[1];
      newArc = "M" + newStart + "A" + middleSec + "0 0 0 " + newEnd;
    }
    path
      .attr("d", newArc);

    var trackId = path.attr("id").split("_").slice(1).join("_");
    d3
      .select(ref.parentNode)
      .append("text")
      .attr("dy", needsFlip ? 18 : -11)
      .append("textPath")
      .attr("startOffset","50%")
      .style("text-anchor","middle")
      .style("font-size", "12px")
      .attr("href", `#${path.attr("id")}`)
      .text(tracks[trackId].displayName);
  }

  render() {
    const currentMilestoneId = this.props.milestoneByTrack[
      this.props.focusedTrackId
    ];
    return (
      <figure>
        <style jsx>{`
          figure {
            margin: 0;
            display: inline-block;
            position: relative;
            top: -15px;
            left: 140px;
          }
          svg {
            width: ${width}px;
            height: ${width}px;
          }
          .track-milestone {
            fill: #eee;
            cursor: pointer;
          }
          .track-milestone-current,
          .track-milestone:hover {
            stroke: #000;
            stroke-width: 4px;
            stroke-linejoin: round;
          }
        `}</style>
        <svg>
          <g
            id="asos_a-1"
            transform={`translate(${width * 0.4}, ${width *
              0.4}) scale(${width / 149.8},${width / 149.8})`}
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <path
              fill="#2D2D2D"
              fillRule="evenodd"
              d="M15 28c7.18 0 13-5.82 13-13S22.18 2 15 2 2 7.82 2 15s5.82 13 13 13zm0 2C6.716 30 0 23.284 0 15 0 6.716 6.716 0 15 0c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15zm-.457-10.77c-1.624 0-3.112-1.278-3.112-3.568 0-1.798 1.115-3.54 3.123-3.54.87 0 3.074.299 3.074 3.54 0 3.249-2.302 3.568-3.085 3.568zM20 10.47a.185.185 0 0 0-.184-.185h-1.962a.185.185 0 0 0-.184.185v.514c0 .087-.058.117-.128.066-.698-.506-1.73-1.049-2.972-1.049-.698 0-1.364.123-1.98.365a5.732 5.732 0 0 0-1.743 1.097 5.608 5.608 0 0 0-1.385 1.889A5.694 5.694 0 0 0 9 15.66c0 .782.137 1.514.408 2.176a5.585 5.585 0 0 0 1.227 1.821c.543.547 1.15.962 1.804 1.234.653.272 1.373.41 2.141.41 1.32 0 2.311-.562 2.96-1.073.072-.054.13-.025.13.065v.54c0 .101.083.184.184.184h1.962a.185.185 0 0 0 .184-.184V10.469z"
            />
          </g>
          <g transform={`translate(${width / 2},${width / 2}) rotate(-33.75)`}>
            {trackIds.map((trackId, i) => {
              const isCurrentTrack = trackId == this.props.focusedTrackId;
              return (
                <g key={trackId}>
                  <g transform={`rotate(${(i * 360) / trackIds.length})`}>
                    {arcMilestones.map((milestone, index) => {
                      const isCurrentMilestone =
                        isCurrentTrack &&
                        milestone == this.props.focusedMilestoneId;
                      const isMet =
                        allTrue(
                          this.props.milestoneCheckboxes[trackId][milestone]
                        ) || milestone == 0;
                      // const isMet =
                      // this.props.milestoneByTrack[trackId] >= milestone ||
                      // milestone == 0;
                      return (
                        <path
                          key={milestone}
                          className={
                            "track-milestone " +
                            (isMet ? "is-met " : " ") +
                            (isCurrentMilestone
                              ? "track-milestone-current"
                              : "")
                          }
                          onClick={() =>
                            this.props.handleTrackMilestoneChangeFn(
                              trackId,
                              milestone
                            )
                          }
                          d={this.arcFn(milestone)}
                          style={{
                            fill: isMet
                              ? categoryColorScale(tracks[trackId].category)
                              : undefined
                          }}
                        />
                      );
                    })}
                    <circle
                      r="10"
                      cx="0"
                      cy="-80"
                      style={{
                        fill: categoryColorScale(tracks[trackId].category)
                      }}
                      className={
                        "track-milestone " +
                        (isCurrentTrack && !this.props.focusedMilestoneId
                          ? "track-milestone-current"
                          : "")
                      }
                      onClick={() =>
                        this.props.handleTrackMilestoneChangeFn(trackId, 0)
                      }
                    />
                    <path fill="none" ref={this.addText} id={`textPath_${trackId}`} data-index={`${i}`} d={this.textArcFn()} />
                  </g>
                </g>
              );
            })}
          </g>
        </svg>
      </figure>
    );
  }
}

export default NightingaleChart;
