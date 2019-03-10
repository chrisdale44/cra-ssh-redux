import React, { Component } from "react";
import Nav from "../../components/Nav";
import PhotoGrid from "../../components/PhotoGrid";
import Filters from "../../components/Filters";
import Tags from "../../components/Tags";
import styles from "./Photography.module.css";

class Photography extends Component {
  render() {
    return (
      <>
        <Nav>
          <Filters />
          <Tags />
        </Nav>
        <div className={styles.container}>
          <PhotoGrid />
        </div>
      </>
    );
  }
}

export default Photography;
