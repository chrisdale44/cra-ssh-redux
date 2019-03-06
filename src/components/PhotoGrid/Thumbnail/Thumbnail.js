import React, { Component } from "react";
import styles from "./Thumbnail.module.css";

class Thumbnail extends Component {
  render() {
    const { style, photo, width } = this.props;
    const transform = `c_scale,w_${width*2}`;
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
