import React, { Component } from "react";
import styles from "./Header.module.css";

class Header extends Component {
  render() {
    const { name, socialLinks } = this.props;
    return (
      <header>
        <h1>{name}</h1>
        {socialLinks.map(({ name, icon, url }, i) => (
          <a href={url} key={i}>
            <img src={icon} alt={name} />
          </a>
        ))}
      </header>
    );
  }
}

export default Header;
