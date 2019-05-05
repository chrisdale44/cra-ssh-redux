import React, { Component } from "react";
import classNames from "classnames/bind";

import componentStyles from "./JobTile.module.css";
import icons from "../../../icons/icons.module.css";
import ProjectTile from "../ProjectTile";
import { dateRange } from "../../helpers";
const styles = { ...componentStyles, ...icons };

let cx = classNames.bind(styles);

const settings = {
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0
};

class JobTile extends Component {
  state = {
    open: false
  };

  handleClick = () => {
    this.setState({
      open: !this.state.open
    });
  };

  render() {
    const {
      role,
      projects,
      company,
      description,
      responsibilities,
      startDate,
      endDate
    } = this.props;
    const { open } = this.state;

    settings.infinite = projects && projects.length > 2;

    const expandableStyles = cx({
      [styles.expandable]: true,
      [styles.open]: open
    });

    return (
      <article className={styles.jobContainer}>
        <div className={styles.iconContainer}>
          {company.logo && (
            <span className={cx(styles[company.logo], styles.icon)} />
          )}
        </div>

        <div className={styles.contentContainer}>
          {role ? (
            <h3>
              {company.name}: {role}
            </h3>
          ) : (
            <h3>{company.name}</h3>
          )}

          {startDate && endDate && (
            <span className={styles.dateRange}>
              {dateRange(startDate, endDate)}
              <br />
            </span>
          )}

          {(description || responsibilities) && (
            <span className={styles.expand} onClick={this.handleClick}>
              {open ? "-" : "+"}
            </span>
          )}

          <div className={expandableStyles}>
            {description && (
              <p className={styles.description}>
                {company.description && <>{company.description}&nbsp;</>}
                {description}
              </p>
            )}

            {responsibilities && (
              <ul>
                {responsibilities.map(responsibility => (
                  <li>{responsibility}</li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* {projects && <h3>Projects</h3>}
            <div class={styles.sliderContainer}>
                <Slider {...settings}>
                {projects &&
                    projects.map(({ ...props }) => (
                    <ProjectTile {...props} />
                    ))}
                </Slider>
            </div> */}
      </article>
    );
  }
}

export default JobTile;
