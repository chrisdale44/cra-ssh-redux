// @flow

import TrackSelector from "./TrackSelector";
import NightingaleChart from "./NightingaleChart";
import KeyboardListener from "./KeyboardListener";
import Track from "./Track";
import Video from "./Video";
import Vacancies from "./Vacancies";
import Wordmark from "./Wordmark";
import LevelThermometer from "./LevelThermometer";
import {
  eligibleTitles,
  trackIds,
  milestones,
  milestoneToPoints
} from "../constants";
import PointSummaries from "./PointSummaries";
import type { Milestone, MilestoneMap, TrackId } from "../constants";
import React from "react";
import TitleSelector from "./TitleSelector";
import { stateToHash, hashToState } from "./helpers/urlHashing";
import { emptyState, defaultState } from "./helpers/appState";

type AsoSphereAppState = {
  milestoneByTrack: MilestoneMap,
  name: string,
  title: string,
  focusedTrackId: TrackId
};

type Props = {};

class AsoSphereApp extends React.Component<Props, AsoSphereAppState> {
  constructor(props: Props) {
    super(props);
    this.state = emptyState();
  }

  componentDidUpdate() {
    const hash = stateToHash(this.state);
    if (hash) window.location.replace(`#${hash}`);
  }

  componentDidMount() {
    const state = hashToState(window.location.hash);
    if (state) {
      this.setState(state);
    } else {
      this.setState(defaultState());
    }
  }

  render() {
    return (
      <main>
        <style jsx global>{`
          @font-face {
            font-family: "futura-pt";
            src: url("https://assets.asosservices.com/MasterLayout/WebFonts/FTN45__W/FTN45__W.eot");
            src: url("https://assets.asosservices.com/MasterLayout/WebFonts/FTN45__W/FTN45__W.eot?#iefix")
                format("embedded-opentype"),
              url("https://assets.asosservices.com/MasterLayout/WebFonts/FTN45__W/FTN45__W.woff2")
                format("woff2"),
              url("https://assets.asosservices.com/MasterLayout/WebFonts/FTN45__W/FTN45__W.woff")
                format("woff"),
              url("https://assets.asosservices.com/MasterLayout/WebFonts/FTN45__W/FTN45__W.ttf")
                format("truetype"),
              url("https://assets.asosservices.com/MasterLayout/WebFonts/FTN45__W/FTN45__W.svg#FuturaPTWeb-Book")
                format("svg");
            font-weight: normal;
            font-style: normal;
          }
          @font-face {
            font-family: "futura-pt";
            src: url("https://assets.asosservices.com/MasterLayout/WebFonts/FTN75__W/FTN75__W.eot");
            src: url("https://assets.asosservices.com/MasterLayout/WebFonts/FTN75__W/FTN75__W.eot?#iefix")
                format("embedded-opentype"),
              url("https://assets.asosservices.com/MasterLayout/WebFonts/FTN75__W/FTN75__W.woff2")
                format("woff2"),
              url("https://assets.asosservices.com/MasterLayout/WebFonts/FTN75__W/FTN75__W.woff")
                format("woff"),
              url("https://assets.asosservices.com/MasterLayout/WebFonts/FTN75__W/FTN75__W.ttf")
                format("truetype"),
              url("https://assets.asosservices.com/MasterLayout/WebFonts/FTN75__W/FTN75__W.svg#FuturaPTWeb-Heavy")
                format("svg");
            font-weight: bold;
            font-style: normal;
          }
          body {
            font-family: "futura-pt", Tahoma, Geneva, Verdana, Arial, sans-serif;
          }
          input,
          select {
            font-family: inherit;
          }
          main {
            width: 960px;
            margin: 0 auto;
          }
          form {
            display: inline-block;
            width: 50%;
          }
          .name-input {
            border: none;
            display: block;
            border-bottom: 2px solid #fff;
            font-size: 30px;
            line-height: 40px;
            font-weight: bold;
            width: 380px;
            margin-bottom: 10px;
          }
          .name-input:hover,
          .name-input:focus {
            border-bottom: 2px solid #ccc;
            outline: 0;
          }
          a {
            color: #888;
            text-decoration: none;
          }
        `}</style>
        <div style={{ margin: "19px auto 0", width: 142 }}>
          <a href="https://asos.com/" target="_blank">
            <Wordmark />
          </a>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1 }}>
            <form>
              <input
                type="text"
                className="name-input"
                value={this.state.name}
                onChange={e => this.setState({ name: e.target.value })}
                placeholder="Name"
              />
              <TitleSelector
                milestoneByTrack={this.state.milestoneByTrack}
                currentTitle={this.state.title}
                setTitleFn={title => this.setTitle(title)}
              />
            </form>
            <PointSummaries milestoneByTrack={this.state.milestoneCheckboxes} />
            <LevelThermometer
              milestoneByTrack={this.state.milestoneCheckboxes}
            />
            <NightingaleChart
              milestoneByTrack={this.state.milestoneByTrack}
              focusedTrackId={this.state.focusedTrackId}
              handleTrackMilestoneChangeFn={(track, milestone) =>
                this.handleTrackMilestoneChange(track, milestone)
              }
              focusedMilestoneId={this.state.focusedMilestoneId}
              milestoneCheckboxes={this.state.milestoneCheckboxes}
            />
          </div>
        </div>
        <KeyboardListener
          selectNextTrackFn={this.shiftFocusedTrack.bind(this, 1)}
          selectPrevTrackFn={this.shiftFocusedTrack.bind(this, -1)}
          increaseFocusedMilestoneFn={this.shiftFocusedTrackMilestoneByDelta.bind(
            this,
            1
          )}
          decreaseFocusedMilestoneFn={this.shiftFocusedTrackMilestoneByDelta.bind(
            this,
            -1
          )}
        />
        <Track
          milestoneByTrack={this.state.milestoneByTrack}
          trackId={this.state.focusedTrackId}
          handleTrackMilestoneChangeFn={(track, milestone) =>
            this.handleTrackMilestoneChange(track, milestone)
          }
          focusedMilestoneId={this.state.focusedMilestoneId}
          handleCheckboxChange={this.handleCheckboxChange.bind(this)}
          milestoneCheckboxes={this.state.milestoneCheckboxes}
        />

        <Video milestoneByTrack={this.state.milestoneCheckboxes} />
        <Vacancies />

        <div style={{ display: "flex", paddingBottom: "20px", width: "100%" }}>
          <div style={{ flex: 1 }}>
            Made with ❤️ by{" "}
            <a href="https://asos.com" target="_blank">
              ASOS WEB
            </a>
            . Get the{" "}
            <a
              href="https://github.com/asosteam/asos-web-cxhack-team7"
              target="_blank"
            >
              source code
            </a>
            . Read the{" "}
            <a href="https://asos.com" target="_blank">
              terms of service
            </a>
            .
          </div>
        </div>
      </main>
    );
  }

  handleTrackMilestoneChange(
    trackId: TrackId,
    milestone: Milestone,
    updateMilestone = false
  ) {
    const milestoneByTrack = this.state.milestoneByTrack;
    if (updateMilestone) {
      milestoneByTrack[trackId] = milestone;
    }

    const titles = eligibleTitles(milestoneByTrack);
    const title =
      titles.indexOf(this.state.title) === -1 ? titles[0] : this.state.title;

    this.setState({
      milestoneByTrack,
      focusedTrackId: trackId,
      focusedMilestoneId: milestone,
      title
    });
  }

  shiftFocusedTrack(delta: number) {
    let index = trackIds.indexOf(this.state.focusedTrackId);
    index = (index + delta + trackIds.length) % trackIds.length;
    const focusedTrackId = trackIds[index];
    this.setState({ focusedTrackId });
  }

  setFocusedTrackId(trackId: TrackId) {
    let index = trackIds.indexOf(trackId);
    const focusedTrackId = trackIds[index];
    this.setState({ focusedTrackId });
  }

  shiftFocusedTrackMilestoneByDelta(delta: number) {
    let prevMilestone = this.state.milestoneByTrack[this.state.focusedTrackId];
    let milestone = prevMilestone + delta;
    if (milestone < 1) milestone = 1;
    if (milestone > 7) milestone = 7;
    this.handleTrackMilestoneChange(this.state.focusedTrackId, milestone);
  }

  setTitle(title: string) {
    let titles = eligibleTitles(this.state.milestoneByTrack);
    title = titles.indexOf(title) == -1 ? titles[0] : title;
    this.setState({ title });
  }

  handleCheckboxChange(trackId, milestoneId, i) {
    const milestoneCheckboxes = this.state.milestoneCheckboxes;
    milestoneCheckboxes[trackId][milestoneId][i] = !milestoneCheckboxes[
      trackId
    ][milestoneId][i];

    this.setState({
      milestoneCheckboxes
    });
  }
}

export default AsoSphereApp;
