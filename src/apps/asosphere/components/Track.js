// @flow

import { tracks, milestones, categoryColorScale } from "../constants";
import React from "react";
import type { MilestoneMap, TrackId, Milestone } from "../constants";
import { allTrue } from "./helpers";

type Props = {
  milestoneByTrack: MilestoneMap,
  trackId: TrackId,
  handleTrackMilestoneChangeFn: (TrackId, Milestone) => void,
  focusedMilestoneId: Milestone,
  milestoneCheckboxes: object
};

class Track extends React.Component<Props> {
  render() {
    const track = tracks[this.props.trackId];
    const currentMilestoneId = this.props.milestoneByTrack[this.props.trackId];
    const focusedMilestoneId = this.props.focusedMilestoneId;
    const currentMilestone = track.milestones[focusedMilestoneId];

    const milestoneToTitle = milestone => {
      switch (milestone) {
        case 0:
          return "Graduate";
        case 1:
          return "Associate";
        case 2:
          return "Mid Level";
        case 3:
          return "Senior I";
        case 4:
          return "Senior II";
        case 5:
          return "Lead";
        case 6:
          return "Principal";
        default:
          return 1;
      }
    };

    return (
      <div className="track">
        <style jsx>{`
          div.track {
            margin: 0 0 20px 0;
            padding-bottom: 20px;
            border-bottom: 2px solid #ccc;
            float: left;
            display: block;
            width: 100%;
          }
          h2 {
            margin: 0 0 10px 0;
          }
          h3 {
            text-align: left;
          }
          p.track-description {
            margin-top: 0;
            padding-bottom: 20px;
            border-bottom: 2px solid #ccc;
          }
          table {
            border-spacing: 3px;
          }
          td {
            line-height: 50px;
            border: 4px solid #eee;
            line-height: 50px;
            width: 125px;
            text-align: left;
            background: #eee;
            font-weight: bold;
            border-radius: 3px;
            cursor: pointer;
            padding-left: 10px;
            font-size: 16px;
            display: inline-block;
          }
          ul {
            line-height: 1.5em;
            list-style: none;
          }

          input[type='checkbox'] { 
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            border: 0 none transparent;
            margin: 0;
           }

          .checkbox {
            position: relative;
            left: -35px;
          }

          .checkbox:before {
            cursor: pointer;
            display: inline-block;
            height: 24px;
            left: 0;
            position: absolute;
            top: 0;
            vertical-align: middle;
            width: 24px;
            background-color: #fff;
            border: 1px solid #777;
            content: "";
            display: block;
            background-color: #fff;
            border: 1px solid #777;
            content: "";
            display: block;
          }

          .checkbox:after {
            content: "";
            height: 13px;
            left: 4px;
            position: absolute;
            top: 6px;
            width: 16px;
          }

          input:checked + .checkbox:after {
            animation: _2xxhdZIr74qqouwvfBHEfR .2s;
            animation-fill-mode: forwards;
            background: #fff no-repeat 50% url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAxNiAxMyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNC42OTMgOS45TDEuNDE0IDYuNjIgMCA4LjAzNWwzLjkzNCAzLjkzNC42NTYuNjU2TDE1LjkwNCAxLjMxMSAxNC41OTIgMGwtOS45IDkuOXoiIGZpbGw9IiMyQjJCMkIiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==);
          }
          
          .label {
            box-sizing: content-box;
            display: block;
            max-width: 330px;
            position: relative;
            padding-bottom: 10px;
          }
        `}</style>
        <h2>{track.displayName}</h2>
        <p className="track-description">{track.description}</p>
        <div style={{ display: "flex" }}>
          <table style={{ flex: 0, marginRight: 50 }}>
            <tbody>
              {milestones
                .slice()
                .reverse()
                .map(milestone => {
                  const isMet = allTrue(
                    this.props.milestoneCheckboxes[this.props.trackId][
                      milestone
                    ]
                  );

                  return (
                    <tr key={milestone}>
                      <td
                        onClick={() =>
                          this.props.handleTrackMilestoneChangeFn(
                            this.props.trackId,
                            milestone
                          )
                        }
                        style={{
                          border: `4px solid ${
                            milestone === focusedMilestoneId
                              ? "#000"
                              : isMet
                              ? categoryColorScale(track.category)
                              : "#eee"
                          }`,
                          background: isMet
                            ? categoryColorScale(track.category)
                            : undefined
                        }}
                      >
                        {milestoneToTitle(milestone)}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          {currentMilestone ? (
            <div style={{ flex: 1 }}>
              <h3>{currentMilestone.summary}</h3>
              <h4>Competencies:</h4>
              <ul>
                {currentMilestone.signals.map((signal, i) => (
                  <li key={i}>
                  <label className="label">
                    <input
                      type="checkbox"
                      name={`${signal}_${i}`}
                      checked={
                        this.props.milestoneCheckboxes[this.props.trackId][
                          focusedMilestoneId
                        ] &&
                        this.props.milestoneCheckboxes[this.props.trackId][
                          focusedMilestoneId
                        ][i]
                      }
                      onChange={() =>
                        this.props.handleCheckboxChange(
                          this.props.trackId,
                          focusedMilestoneId,
                          i
                        )
                      }
                    />
                    <span className="checkbox"></span>
                    <span>{signal}</span>
                  </label>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Track;
