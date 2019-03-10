import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./Accordion.module.css";

let cx = classNames.bind(styles);

class Accordion extends Component {
  constructor() {
    super();

    this.state = {
      open: false
    };
  }

  handleClick = () => {
    const { open } = this.state;

    this.setState({
      open: !open
    });
  };

  render() {
    const { children, label } = this.props;
    const { open } = this.state;

    const icon = open ? "‒" : "+";

    const classNames = cx({
      [styles.accordion]: true,
      open: open
    });

    return (
      <div className={styles.wrapper}>
        <button className={styles.label} onClick={this.handleClick}>
          {label} <span className={styles.icon}>{icon}</span>
        </button>
        <div className={classNames}>{children}</div>
      </div>
    );
  }
}

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  open: PropTypes.bool
};

export default Accordion;
