import React, { Component } from "react";
import classNames from "classnames/bind";
import Slider from "react-slick";
import componentStyles from "./JobTile.module.css";
import icons from "../../../icons/icons.module.css";
import ProjectTile from "../ProjectTile";
import { dateRange } from "../../helpers";
const styles = { ...componentStyles, ...icons };

let cx = classNames.bind(styles);

const settings = {
  dots: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  initialSlide: 0,
  infinite: false,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }
  ]
};

class JobTile extends Component {
  constructor(props) {
    super();
    this.state = {
      open: props.open
    };
  }

  handleExpand = () => {
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
          <div className={styles.head} onClick={this.handleExpand}>
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
          </div>

          {(description || responsibilities || projects) && (
            <span className={styles.expand} onClick={this.handleExpand}>
              {open ? String.fromCharCode(8722) : String.fromCharCode(43)}
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
                {responsibilities.map((responsibility, i) => (
                  <li key={i}>{responsibility}</li>
                ))}
              </ul>
            )}

            {projects && <h3>Projects</h3>}
            <div className={styles.sliderContainer}>
              <Slider {...settings}>
                {projects &&
                  projects.map(({ ...props }, i) => (
                    <ProjectTile {...props} key={i} />
                  ))}
              </Slider>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default JobTile;
