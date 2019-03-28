import { connect } from "react-redux";
import { getOpenPhoto } from "./store/photos";
import React, { Component } from "react";
import Nav from "./components/Nav";
import PhotoGrid from "./components/PhotoGrid";
import Filters from "./components/Filters";
import Tags from "./components/Tags";
import PhotoModal from "./components/PhotoModal";
import styles from "./Photography.module.css";

const mapStateToProps = state => ({
  photo: getOpenPhoto(state)
});

class Photography extends Component {
  render() {
    const { photo } = this.props;
    console.log(photo);
    return (
      <>
        <div className={styles.container}>
          <PhotoGrid />
          {photo && <PhotoModal photo={photo} />}
        </div>
        <Nav>
          <Filters />
          <Tags />
        </Nav>
      </>
    );
  }
}

export default connect(mapStateToProps)(Photography);
