import React, { Component } from "react";
import classNames from "classnames/bind";
import componentStyles from "./Education.module.css";
import icons from "../../icons/icons.module.css";
import { dateRange } from "../helpers";
const styles = { ...componentStyles, ...icons };

let cx = classNames.bind(styles);

class Education extends Component {
  render() {
    const { university, school } = this.props.education;
    return (
      <section className={styles.education}>
        <h2>Education</h2>

        {university.map(
          (
            { name, degree, logo, result, startDate, endDate, description },
            i
          ) => (
            <article className={styles.educationContainer} key={i}>
              <div className={styles.iconContainer}>
                <span className={cx(styles[logo], styles.icon)} />
              </div>
              <div className={styles.contentContainer}>
                <h3>{name}</h3>
                {startDate && endDate && (
                  <span className={styles.dateRange}>
                    {dateRange(startDate, endDate)}
                    <br />
                  </span>
                )}

                <h4>
                  {degree}, {result}
                </h4>
                <p>{description}</p>
              </div>
            </article>
          )
        )}
        {school.map(({ name, qualifications, logo, startDate, endDate }, i) => (
          <article className={styles.educationContainer} key={i}>
            <div className={styles.iconContainer}>
              <span className={cx(styles[logo], styles.icon)} />
            </div>
            <div className={styles.contentContainer}>
              <h3>{name}</h3>
              {startDate && endDate && (
                <span className={styles.dateRange}>
                  {dateRange(startDate, endDate)}
                  <br />
                </span>
              )}

              {qualifications &&
                qualifications.map(({ name, subjects }, i) => (
                  <div className={styles.qualification} key={i}>
                    <h4>{name}</h4>
                    <ul className={styles.subjectList}>
                      {subjects.map(({ title, result }) => (
                        <li>
                          {result} - {title}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
          </article>
        ))}
      </section>
    );
  }
}

export default Education;
