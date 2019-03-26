import React, { Component } from "react";
import PropTypes from "prop-types";
import Close from "./Close";
import styles from "./PhotoModal.module.css";

class PhotoModal extends Component {
  componentDidMount() {
    document.body.classList.add("no-scroll");
  }

  componentWillUnmount() {
    document.body.classList.remove("no-scroll");
  }

  render() {
    const { photo, closeOpenPhoto } = this.props;
    const { url } = photo;

    return (
      <div className={styles.wrapper}>
        <img className={styles.photo} src={url} />
        <Close className={styles.close} handleClick={closeOpenPhoto} />
      </div>
    );
  }
}

PhotoModal.propTypes = {
  photo: PropTypes.object,
  closeOpenPhoto: PropTypes.func.isRequired
};

export default PhotoModal;
