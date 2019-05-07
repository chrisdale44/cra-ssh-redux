import React, { Component } from "react";
import classNames from "classnames/bind";
import Slider from "react-slick";
import componentStyles from "./JobTile.module.css";
import icons from "../../../icons/icons.module.css";
import ProjectTile from "../ProjectTile";
import { dateRange } from "../../helpers";
const styles = { ...componentStyles, ...icons };

let cx = classNames.bind(styles);

const PrevArrow = ({ onClick }) => (
  <button className={cx(styles.prev, styles.prevArrow)} onClick={onClick} />
);
const NextArrow = ({ onClick }) => (
  <button className={cx(styles.next, styles.nextArrow)} onClick={onClick} />
);
const settings = {
  dots: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  initialSlide: 0,
  infinite: true,
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
  ],
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />
};

class JobTile extends Component {
  constructor(props) {
    super();
    this.state = {
      open: props.open,
      clientXonMouseDown: null,
      clientYonMouseDown: null
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

    settings.infinite = projects && projects.length > 2;

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
            <button
              className={cx(
                open ? [styles.minus] : [styles.plus],
                styles.expandIcon
              )}
              onClick={this.handleExpand}
            />
          )}

          <div
            className={cx({
              [styles.expandable]: true,
              [styles.open]: open
            })}
          >
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
