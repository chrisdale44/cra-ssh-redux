import React, { Component } from "react";
import Burger from "./Burger";
import styles from "./Nav.module.css";
import classNames from "classnames";

let cx = classNames.bind(styles);

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
  }

  toggleSideNav = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  };

  render() {
    const { open } = this.state;
    const { children } = this.props;
    const classNames = cx({
      [styles.flexContainer]: true,
      [styles.open]: open
    });

    return (
      <div className={classNames}>
        <nav>
          <Burger handleClick={this.toggleSideNav} open={open} />
          <div className={styles.refinements}>{children}</div>
        </nav>
      </div>
    );
  }
}

export default Nav;
