import React, { Component } from "react";
import JobTile from "./JobTile";
// import styles from "./WorkExperience.module.css";

class WorkExperience extends Component {
  render() {
    const { experience } = this.props;

    return (
      <section>
        <h2>Work Experience</h2>
        {experience.map((props, i) => (
          <JobTile {...props} key={i} />
        ))}
      </section>
    );
  }
}

export default WorkExperience;
