import React, { Component } from "react";
import componentStyles from "./Education.module.css";
import icons from "../../icons/icons.module.css";
const styles = { ...componentStyles, ...icons };

class Education extends Component {
  render() {
    const { university, school } = this.props.education;
    return (
      <section>
        <h2>Education</h2>
        {university.map(({ name, degree, logo }, i) => (
          <div className={styles.uni} key={i}>
            <span className={styles[logo]} />
            <h3>{name}</h3>
            <h4>{degree}</h4>
          </div>
        ))}
        {school.map(({ name, qualifications, logo }, i) => (
          <div className={styles.school} key={i}>
            <span className={styles[logo]} />
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
