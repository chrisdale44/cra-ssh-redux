import React, { Component } from "react";
import styles from "./Education.module.css";

class Education extends Component {
  render() {
    const { university, school } = this.props.education;
    return (
      <section>
        <h2>Education</h2>
        {university.map((u, i) => (
          <div className={styles.uni} key={i}>
            <h3>{u.name}</h3>
            <h4>{u.degree}</h4>
          </div>
        ))}
        {school.map(({ name, qualifications }, i) => (
          <div className={styles.school} key={i}>
            <h3>{name}</h3>
            {qualifications &&
              qualifications.map(({ name, subjects }, i) => (
                <div className={styles.qualification} key={i}>
                  <h4>{name}</h4>
                  {subjects.map(({ title, result }) => (
                    <p>
                      {title} - {result}
                    </p>
                  ))}
                </div>
              ))}
          </div>
        ))}
      </section>
    );
  }
}

export default Education;
