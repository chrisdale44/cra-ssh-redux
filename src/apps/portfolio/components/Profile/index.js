import React, { Component } from "react";
import styles from "./Profile.module.css";

class Profile extends Component {
  render() {
    const { profile } = this.props;
    return (
      <section className={styles.profile}>
        <p>{profile}</p>
      </section>
    );
  }
}

export default Profile;
