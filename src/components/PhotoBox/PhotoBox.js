import React, { Component } from "react";
import PropTypes from "prop-types";
// import classNames from "classnames/bind";
import styles from "./PhotoBox.module.css";

// let cx = classNames.bind(styles);

class PhotoBox extends Component {
  handleClick = () => {};

  render() {
    const { photo, closeOpenPhoto } = this.props;

    if (!photo) {
      return null;
    }
    const { public_id, url } = photo;

    return (
      <div className={styles.wrapper}>
        <img className={styles.photo} src={url} />
        <span className={styles.close} onClick={closeOpenPhoto}>
          X
        </span>
      </div>
    );
  }
}

PhotoBox.propTypes = {
  //   children: PropTypes.node.isRequired,
  photo: PropTypes.object.isRequired,
  closeOpenPhoto: PropTypes.func.isRequired
};

export default PhotoBox;
