import React, { Component } from "react";
import styles from "./index.module.css";
import classNames from "classnames";

let cx = classNames.bind(styles);

class SideNav extends Component {
  render() {
    const { open } = this.props;
    const className = cx({
      [styles.sideNav]: true,
      [styles.open]: open
    });
    console.log(className);

    return <nav className={className}>test</nav>;
  }
}

export default SideNav;
