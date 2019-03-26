import React, { Component } from "react";
import styles from "./Close.module.css";
import classNames from "classnames";

let cx = classNames.bind(styles);

class Close extends Component {
  render() {
    const { open, handleClick } = this.props;
    const classNames = cx({
      [styles.close]: true,
      [styles.open]: open
    });

    return (
      <button className={classNames} onClick={handleClick}>
        <span />
        <span />
      </button>
    );
  }
}

export default Close;
