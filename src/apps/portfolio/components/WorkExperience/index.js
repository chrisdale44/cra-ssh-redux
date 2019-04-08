import React, { Component } from "react";
import Slider from "react-slick";
import { dateRange } from "./helpers";
import componentStyles from "./WorkExperience.module.css";
import icons from "../../icons/icons.module.css";
const styles = { ...componentStyles, ...icons };

class WorkExperience extends Component {
  render() {
    const { experience } = this.props;
    const settings = {
      dots: true
    };
    return (
      <section>
        <h2>Work Experience</h2>
        {experience.map(
          (
            {
              role,
              company,
              projects,
              startDate,
              endDate,
              description,
              responsibilities,
              technologies
            },
            i
          ) => (
            <article className={styles.jobContainer} key={i}>
              {company && role && (
                <>
                  {company.logo && <span className={styles[company.logo]} />}
                  <div className={styles.companyDetails}>
                    <h3>
                      {company.name}: {role}
                    </h3>
                    <span className={styles.dateRange}>
                      {dateRange(startDate, endDate)}
                    </span>
                  </div>
                </>
              )}

              {company && <p>{company.description}</p>}
              <p>{description}</p>
              {responsibilities && (
                <ul>
                  {responsibilities.map(responsibility => (
                    <li>{responsibility}</li>
                  ))}
                </ul>
              )}
              <span className={styles.technologies}>
                {technologies && technologies.map(t => t + ", ")}
              </span>
              {projects && <h3>Projects</h3>}
              <Slider {...settings}>
                {projects &&
                  projects.map(
                    ({
                      title,
                      startDate,
                      endDate,
                      description,
                      responsibilities,
                      technologies
                    }) => (
                      <div className={styles.projectContainer}>
                        <h4>{title}</h4>
                        {dateRange(startDate, endDate)}
                        <p>{description}</p>
                        {responsibilities && (
                          <ul>
                            {responsibilities.map(responsibility => (
                              <li>{responsibility}</li>
                            ))}
                          </ul>
                        )}
                        <span>
                          {technologies && technologies.map(t => t + ", ")}
                        </span>
                      </div>
                    )
                  )}
              </Slider>
            </article>
          )
        )}
      </section>
    );
  }
}

export default WorkExperience;
