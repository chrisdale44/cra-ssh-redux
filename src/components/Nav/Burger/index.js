import React, { Component } from "react";
import styles from "./Burger.module.css";
import classNames from "classnames";

let cx = classNames.bind(styles);

class Burger extends Component {
  render() {
    const { open, handleClick } = this.props;
    const classNames = cx({
      [styles.burger]: true,
      [styles.open]: open
    });

    return (
      <button className={classNames} onClick={handleClick}>
        <span />
        <span />
        <span />
      </button>
    );
  }
}

export default Burger;
