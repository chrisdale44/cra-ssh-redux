import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./Tag.module.css";

let cx = classNames.bind(styles);

class Tags extends Component {
  handleClick = () => {
    const { toggleTagSelected, id } = this.props;
    toggleTagSelected(id);
  };

  render() {
    const { id, isEnabled, isSelected } = this.props;

    const className = cx({
      [styles.button]: true,
      isSelected: isSelected
    });

    return (
      <button
        className={className}
        disabled={!isEnabled}
        onClick={this.handleClick}
      >
        {id}
      </button>
    );
  }
}

Tags.propTypes = {
  id: PropTypes.string.isRequired,
  toggleTagSelected: PropTypes.func,
  isSelected: PropTypes.bool.isRequired,
  isEnabled: PropTypes.bool.isRequired
};

export default Tags;
