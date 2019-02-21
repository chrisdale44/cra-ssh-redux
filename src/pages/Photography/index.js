import React, { Component } from "react";
import Refinements from "../../components/Refinements";
import PhotoGrid from "../../components/PhotoGrid";
import Header from "../../components/Header";

class Photography extends Component {
  render() {
    return (
      <>
        <Header />
        <Refinements />
        <PhotoGrid />
      </>
    );
  }
}

export default Photography;
