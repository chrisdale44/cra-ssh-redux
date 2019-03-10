import React, { Component } from "react";
import PropTypes from "prop-types";
import Accordion from "../Accordion";
import Tag from "./Tag";
import styles from "./Tags.module.css";
import { TAGS_SHAPE } from "./constants";

class Tags extends Component {
  render() {
    const { tags, toggleTag } = this.props;
    const mappedTags =
      tags.length &&
      tags.map(({ id, isEnabled, isSelected }, i) => {
        return (
          <Tag
            key={i}
            id={id}
            toggleTag={toggleTag}
            isEnabled={isEnabled}
            isSelected={isSelected}
          />
        );
      });

    return (
      <Accordion label={"tags"}>
        <div className={styles.wrapper}>{mappedTags}</div>
      </Accordion>
    );
  }
}

Tags.propTypes = {
  tags: TAGS_SHAPE,
  toggleTag: PropTypes.func
};

export default Tags;
