import React, { Component } from "react";
import styles from "./Profile.module.css";

class Profile extends Component {
  render() {
    const { profile, avatar, name } = this.props;
    return (
      <section className={styles.profile}>
        <img src={avatar} alt={name} />
        <span>
          <h1>{name}</h1>
          <p>{profile}</p>
        </span>
      </section>
    );
  }
}

export default Profile;
