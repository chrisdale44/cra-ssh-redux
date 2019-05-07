// @flow

import React from 'react'
import { eligibleTitles } from '../constants'
import type { MilestoneMap } from '../constants'

type Props = {
  milestoneByTrack: MilestoneMap,
  currentTitle: String,
  setTitleFn: (string) => void
}

class TitleSelector extends React.Component {
  render() {
    const titles = eligibleTitles(this.props.milestoneByTrack)
    return (
    <div className="titleSelectorWrapper" style={{ width: "330px", position: "relative" }}>
    <style jsx>{`
    select {
      font-size: 20px;
      line-height: 20px;
      margin-bottom: 20px;
      min-width: 300px;
      color: #2d2d2d;
      font-size: 1.6rem;
      font-weight: 400;
      letter-spacing: .05rem;
      margin: 0;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      background: #fff;
      border: 1px solid #777;
      border-radius: 0;
      font-size: 16px;
      height: 44px;
      padding: 0 28px 0 16px;
      width: 330px;
    }

  `}</style>
    <select value={this.props.currentTitle} onChange={e => this.props.setTitleFn(e.target.value)}>
      {titles.map(title => (
        <option key={title}>
          {title}
        </option>
      ))}
    </select>
    <span className="dropdownIcon" style={{ 
      pointerEvents: "none",
      width: "44px",
      height: "44px",
      position: "absolute",
      top: "0",
      right: "0",
      backgroundImage: "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNyIgdmlld0JveD0iMCAwIDEwIDciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTUuMDU3IDMuNTY2TDcuOTc0LjY0OWwxLjQxNCAxLjQxNC00LjI0MyA0LjI0My0uMDg4LS4wODktLjA4NC4wODVMLjczIDIuMDYgMi4xNDEuNjVsMi45MTYgMi45MTZ6IiBmaWxsPSIjMkQyRDJEIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)",
      backgroundPosition: "50%",
      backgroundRepeat: "no-repeat"
     }}></span>
    </div>
    )}
}

export default TitleSelector
