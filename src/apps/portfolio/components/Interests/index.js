import React, { Component } from "react";
import styles from "./Interests.module.css";

class Interests extends Component {
  render() {
    const { interests } = this.props;
    return (
      <section>
        <h2>Interests</h2>
        {interests.map(({ title }, i) => (
          <h3 key={i}>{title}</h3>
        ))}
      </section>
    );
  }
}

export default Interests;
