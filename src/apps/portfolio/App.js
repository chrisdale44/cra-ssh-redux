import React, { Component } from "react";
import styles from "./App.module.css";
import portfolio from "./portfolio.json";

class Portfolio extends Component {
  render() {
    const {
      name,
      socialLinks,
      profile,
      skills,
      projects,
      experience,
      education,
      interests
    } = portfolio;
    return (
      <div className={styles.wrapper}>
        <header>
          <h1>{name}</h1>
        </header>
        <section className={styles.profile}>
          <h2>Profile</h2>
          <p>{profile}</p>
        </section>
        <section className={styles.skills}>
          <h2>Skills</h2>
          <ul>
            {skills.map(({ name, icon }) => (
              <li>
                <span className={styles[icon]} />
                {name}
              </li>
            ))}
          </ul>
        </section>
        <section className={styles.projects}>
          <h2>Personal Projects</h2>
          {projects.map(({ title }) => (
            <h3>{title}</h3>
          ))}
        </section>
        <section className={styles.experience}>
          <h2>Work Experience</h2>
          {experience.map(({ role, company, projects }) => (
            <div className={styles.jobContainer}>
              <h3>{role}</h3>
              <h4>{company.name}</h4>
              {projects &&
                projects.map(({ company }) => (
                  <div className={styles.jobContainer}>
                    <h4>{company.name}</h4>
                  </div>
                ))}
            </div>
          ))}
        </section>
        <section className={styles.education}>
          <h2>Education</h2>
          {education.university.map(u => (
            <div className={styles.uni}>
              <h3>{u.name}</h3>
              <h4>{u.degree}</h4>
            </div>
          ))}
          {education.school.map(({ name, qualifications }) => (
            <div className={styles.school}>
              <h3>{name}</h3>
              {qualifications &&
                qualifications.map(({ name, subjects }) => (
                  <div className={styles.qualification}>
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
        <section className={styles.interests}>
          <h2>Interests</h2>
          {interests.map(({ title }) => (
            <h3>{title}</h3>
          ))}
        </section>
        <footer>{String.fromCharCode(169)} Christopher Dale 2019</footer>
      </div>
    );
  }
}

export default Portfolio;
