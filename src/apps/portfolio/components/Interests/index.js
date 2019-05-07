import React, { Component } from "react";
import styles from "./Interests.module.css";

class Interests extends Component {
  render() {
    const { interests } = this.props;
    return (
      <section>
        <h2>Interests</h2>
        <div className={styles.interestsContainer}>
          {interests.map(({ title, image, url }, i) => (
            <a className={styles.interestTile} href={url} key={i}>
              <img src={image} alt={title} />
              <h3 key={i}>{title}</h3>
            </a>
          ))}
        </div>
      </section>
    );
  }
}

export default Interests;
