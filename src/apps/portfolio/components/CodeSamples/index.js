import React, { Component } from "react";
import styles from "./Projects.module.css";

class CodeSamples extends Component {
  render() {
    const { samples } = this.props;
    return (
      <section>
        <h2>Example Code</h2>
        {samples.map(({ title, technologies }, i) => (
          <div key={i}>
            <h3>{title}</h3>
            <span>{technologies && technologies.map(t => t + ", ")}</span>
          </div>
        ))}
      </section>
    );
  }
}

export default CodeSamples;
