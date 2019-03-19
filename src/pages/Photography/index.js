import React, { Component } from "react";
import Nav from "../../components/Nav";
import PhotoGrid from "../../components/PhotoGrid";
import Filters from "../../components/Filters";
import Tags from "../../components/Tags";
import PhotoBox from "../../components/PhotoBox";
import styles from "./Photography.module.css";

class Photography extends Component {
  render() {
    return (
      <>
        <div className={styles.container}>
          <PhotoGrid />
          <PhotoBox />
        </div>
        <Nav>
          <Filters />
          <Tags />
        </Nav>
      </>
    );
  }
}

export default Photography;
