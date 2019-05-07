import React, { Component } from "react";
import JobTile from "./JobTile";
import styles from "./WorkExperience.module.css";

class WorkExperience extends Component {
  render() {
    const { experience } = this.props;

    return (
      <section className={styles.workExperience}>
        <h2>Work Experience</h2>
        {experience.map((props, i) => {
          const open = i > 1 ? false : true;
          return <JobTile {...props} key={i} open={false} />;
        })}
      </section>
    );
  }
}

export default WorkExperience;
