import React, { Component } from "react";
import componentStyles from "./Skills.module.css";
import icons from "../../icons/icons.module.css";
const styles = { ...componentStyles, ...icons };

class Skills extends Component {
  render() {
    const { skills } = this.props;
    return (
      <section className={styles.skills}>
        <h2>Core Skills</h2>
        <ul>
          {skills.map(({ name, icon }, i) => (
            <li key={i}>
              <span className={styles[icon]} />
              {name}
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default Skills;
