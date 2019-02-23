import React, { Component } from "react";
import styles from "./Thumbnail.module.css";

const transform = "c_scale,w_550";

class Thumbnail extends Component {
  render() {
    const { style, photo } = this.props;
    const photoUrl = photo.secure_url.split("/");
    photoUrl.splice(photoUrl.length - 2, 0, transform);

    return (
      <div className={styles.wrapper} style={{ ...style }}>
        <img src={photoUrl.join("/")} alt={photo.caption} />
      </div>
    );
  }
}

export default Thumbnail;
