import React, { Component } from "react";
import ComboBox from "./ComboBox";
import styles from "./Filters.module.css";
import { FILTERS_SHAPE } from "./constants";

class Filters extends Component {
  render() {
    const { filterOptions } = this.props;
    const filterComboBoxes = filterOptions.map(({ id, options }, i) => (
      <ComboBox
        key={i}
        title={id}
        options={options}
        handleClick={this.handleClick}
      />
    ));

    return <div className={styles.wrapper}>{filterComboBoxes}</div>;
  }
}

Filters.propTypes = {
  filterOptions: FILTERS_SHAPE
};

export default Filters;
