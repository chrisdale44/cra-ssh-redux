import React, { Component } from "react";
import Slider from "react-slick";
import Header from "./Header";
import componentStyles from "./WorkExperience.module.css";
import icons from "../../icons/icons.module.css";
import ProjectTile from "./ProjectTile";
const styles = { ...componentStyles, ...icons };

class WorkExperience extends Component {
  render() {
    const { experience } = this.props;
    const settings = {
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0
    };
    return (
      <section>
        <h2>Work Experience</h2>
        {experience.map(
          (
            { company, projects, description, responsibilities, ...restProps },
            i
          ) => {
            settings.infinite = projects && projects.length > 2;

            return (
              <section className={styles.jobContainer} key={i}>
                {company && (
                  <Header
                    logo={company.logo}
                    name={company.name}
                    {...restProps}
                  />
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
                      projects.map(({ ...props }) => (
                        <ProjectTile {...props} />
                      ))}
                  </Slider>
                </div>
              </section>
            );
          }
        )}
      </section>
    );
  }
}

export default WorkExperience;
