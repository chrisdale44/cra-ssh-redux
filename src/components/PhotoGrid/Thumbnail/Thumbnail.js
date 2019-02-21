import React, { Component } from "react";
import styles from "./Thumbnail.module.css";

const UPLOADS_DIR = "/photos/";

class Thumbnail extends Component {
  render() {
    const { style } = this.props;
    return (
      <div className={styles.wrapper} style={{ ...style }}>
        <img src={this.props.photo.url} alt={this.props.photo.caption} />
      </div>
    );
  }
}

export default Thumbnail;
