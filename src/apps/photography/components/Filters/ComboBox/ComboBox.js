import React, { Component } from "react";
import PropTypes from "prop-types";
import Accordion from "../../Accordion";
import classNames from "classnames/bind";
import styles from "./ComboBox.module.css";
import { OPTIONS_SHAPE } from "../constants";

let cx = classNames.bind(styles);

class ComboBox extends Component {
  render() {
    const { options, title, toggleSelectedFilter } = this.props;

    const opts = options.map(({ id, isSelected }, i) => {
      const className = cx({
        [styles.option]: true,
        [styles.selected]: isSelected ? true : false
      });
      return (
        <li
          key={i}
          onClick={() => toggleSelectedFilter(title, id)}
          className={className}
        >
          {id}
        </li>
      );
    });

    return (
      <Accordion label={title}>
        <ul className={styles.optionsList}>{opts}</ul>
      </Accordion>
    );
  }
}

ComboBox.propTypes = {
  title: PropTypes.string.isRequired,
  options: OPTIONS_SHAPE,
  selected: PropTypes.string,
  toggleSelectedFilter: PropTypes.func.isRequired
};

export default ComboBox;
