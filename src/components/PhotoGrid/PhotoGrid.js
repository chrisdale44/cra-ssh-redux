import React, { Component } from "react";
import PropTypes from "prop-types";
import StackGrid from "react-stack-grid";
import Thumbnail from "./Thumbnail";
import throttle from "lodash.throttle";
import { PHOTOS_SHAPE } from "./constants";
import refinePhotos from "../../helpers/refinePhotos";
import styles from "./PhotoGrid.module.css";
import { DESKTOP, MOBILE } from "../constants.js";

class PhotoGrid extends Component {
  dimensions = {
    mobile: {
      column: 110,
      gutter: 15
    },
    desktop: {
      column: 275,
      gutter: 30
    }
  };
  breakpoint = 720;

  componentWillMount() {
    window.onresize = throttle(this.handleResize, 100);
    this.setDimensions(window.innerWidth);
  }

  handleResize = e => {
    if (!e || !e.target || !e.target.outerWidth) {
      return;
    }
    this.setDimensions(e.target.innerWidth);
  };

  setDimensions(width) {
    const viewport = width <= this.breakpoint ? MOBILE : DESKTOP;
    this.setState({
      viewport,
      gutterWidth: this.dimensions[viewport].gutter,
      columnWidth: this.dimensions[viewport].column
    });
  }

  render() {
    const { photos, selectedFilters, selectedTags } = this.props;
    const { gutterWidth, columnWidth } = this.state;

    let items = [];

    if (photos.length) {
      const filteredPhotos = refinePhotos(
        photos,
        selectedFilters,
        selectedTags
      );

      if (filteredPhotos.length) {
        items = filteredPhotos.map((v, i) => {
          return <Thumbnail key={i} photo={v} width={columnWidth} />;
        });
      }
    }

    return (
      <StackGrid
        columnWidth={columnWidth}
        monitorImagesLoaded={true}
        gutterWidth={gutterWidth}
        className={styles.container}
      >
        {items}
      </StackGrid>
    );
  }
}

PhotoGrid.propTypes = {
  photos: PHOTOS_SHAPE,
  selectedTags: PropTypes.arrayOf(PropTypes.string),
  selectedFilters: PropTypes.object,
  size: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number
  })
};

export default PhotoGrid;
