import React, { Component } from "react";
import Header from "../Header";
import styles from "./ProjectTile.module.css";

class ProjectTile extends Component {
  render() {
    const {
      title,
      startDate,
      endDate,
      technologies,
      logo,
      description,
      responsibilities,
      screenshot
    } = this.props;

    return (
      <div className={styles.slideContainer}>
        <div className={styles.slide}>
          <div className={styles.content}>
            <Header
              title={title}
              startDate={startDate}
              endDate={endDate}
              technologies={technologies}
              logo={logo}
            />
            <article>
              <p>{description}</p>
              {responsibilities && (
                <ul>
                  {responsibilities.map(responsibility => (
                    <li>{responsibility}</li>
                  ))}
                </ul>
              )}
            </article>
          </div>
          <div className={styles.screenshots}>
            {screenshot && <img src={screenshot} alt="" />}
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectTile;
