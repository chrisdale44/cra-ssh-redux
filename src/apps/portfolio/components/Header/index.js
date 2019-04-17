import React, { Component } from "react";
import componentStyles from "./Header.module.css";
import icons from "../../icons/icons.module.css";
const styles = { ...componentStyles, ...icons };

class Header extends Component {
  render() {
    const { name, socialLinks } = this.props;
    return (
      <header>
        <h1>{name}</h1>
        <div className={styles.socialLinks}>
          {socialLinks.map(({ name, icon, url }, i) => (
            <a href={url} key={i} className={styles[icon]} aria-label={name} />
          ))}
        </div>
      </header>
    );
  }
}

export default Header;
