import React, { Component } from "react";
import { dateRange } from "../../helpers";
import classNames from "classnames/bind";
import componentStyles from "./Header.module.css";
import icons from "../../../icons/icons.module.css";
const styles = { ...componentStyles, ...icons };
let cx = classNames.bind(styles);

class Header extends Component {
  render() {
    const {
      logo,
      name,
      role,
      startDate,
      endDate,
      technologies,
      title
    } = this.props;

    return (
      <div className={styles.heading}>
        <div className={styles.mainDetails}>
          {title ? (
            <h4>{title}</h4>
          ) : role ? (
            <h3>
              {name}: {role}
            </h3>
          ) : (
            <h3>{name}</h3>
          )}

          {startDate && endDate && (
            <span className={styles.dateRange}>
              {dateRange(startDate, endDate)}
              <br />
            </span>
          )}

          {/* {technologies && (
            <span className={styles.techList}>
              {technologies.map((t, i) =>
                i < technologies.length - 1 ? t + ", " : t
              )}
            </span>
          )} */}
        </div>
      </div>
    );
  }
}

export default Header;
