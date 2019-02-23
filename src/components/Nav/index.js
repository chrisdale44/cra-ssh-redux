import React, { Component } from "react";
import SideNav from "./SideNav";
import styles from "./Nav.module.css";

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      sideNavOpen: false
    };
  }

  toggleSideNav = () => {
    console.log("toggleSideNav");
    const { sideNavOpen } = this.state;
    this.setState({ sideNavOpen: !sideNavOpen });
  };

  render() {
    const { sideNavOpen } = this.state;
    console.log(sideNavOpen);
    return (
      <nav className={styles.nav}>
        <button onClick={this.toggleSideNav}>M</button>
        <h1>chris dale</h1>
        <SideNav open={sideNavOpen} />
      </nav>
    );
  }
}

export default Nav;
