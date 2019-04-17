import React, { Component } from "react";
import Slider from "react-slick";
import classNames from "classnames/bind";
import { dateRange } from "./helpers";
import componentStyles from "./WorkExperience.module.css";
import icons from "../../icons/icons.module.css";
const styles = { ...componentStyles, ...icons };

let cx = classNames.bind(styles);

class WorkExperience extends Component {
  render() {
    const { experience } = this.props;
    const settings = {
      dots: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0
          }
        }
      ]
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
          ) => {
            settings.infinite = projects && projects.length > 3;
            settings.slidesToShow = projects && projects.length > 1 ? 2 : 1;
            return (
              <article className={styles.jobContainer} key={i}>
                {company && role && (
                  <div className={styles.heading}>
                    {company.logo && (
                      <span className={cx(styles[company.logo], styles.icon)} />
                    )}
                    <div className={styles.mainDetails}>
                      <h3>
                        {company.name}: {role}
                      </h3>
                      <span className={styles.dateRange}>
                        {dateRange(startDate, endDate)}
                      </span>
                      <br />
                      {technologies && (
                        <span className={styles.techList}>
                          {technologies.map((t, i) =>
                            i < technologies.length ? t + ", " : t
                          )}
                        </span>
                      )}
                    </div>
                  </div>
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

                {projects && <h3>Projects</h3>}
                <div class={styles.sliderContainer}>
                  <Slider {...settings}>
                    {projects &&
                      projects.map(
                        ({
                          title,
                          startDate,
                          endDate,
                          description,
                          responsibilities,
                          technologies,
                          logo
                        }) => (
                          <div className={styles.slideContainer}>
                            <div className={styles.slide}>
                              <div className={styles.heading}>
                                {logo && (
                                  <span
                                    className={cx(styles[logo], styles.icon)}
                                  />
                                )}
                                <div className={styles.mainDetails}>
                                  <h4>{title}</h4>
                                  {startDate && endDate && (
                                    <span className={styles.dateRange}>
                                      {dateRange(startDate, endDate)}
                                      <br />
                                    </span>
                                  )}

                                  {technologies && (
                                    <span className={styles.techList}>
                                      {technologies.map((t, i) =>
                                        i < technologies.length - 1
                                          ? t + ", "
                                          : t
                                      )}
                                    </span>
                                  )}
                                </div>
                              </div>
                              <p>{description}</p>
                              {responsibilities && (
                                <ul>
                                  {responsibilities.map(responsibility => (
                                    <li>{responsibility}</li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          </div>
                        )
                      )}
                  </Slider>
                </div>
              </article>
            );
          }
        )}
      </section>
    );
  }
}

export default WorkExperience;
