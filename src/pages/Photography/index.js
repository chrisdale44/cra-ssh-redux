import React, { Component } from "react";
import Nav from "../../components/Nav";
import PhotoGrid from "../../components/PhotoGrid";
import Refinements from "../../components/Refinements";
import styles from "./Photography.module.css";

class Photography extends Component {
  render() {
    return (
      <>
        <Nav>
          <Refinements />
        </Nav>
        <div className={styles.container}>
          <PhotoGrid />
        </div>
      </>
    );
  }
}

export default Photography;
