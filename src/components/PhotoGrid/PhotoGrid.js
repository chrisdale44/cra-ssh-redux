import React, { Component } from "react";
import PropTypes from "prop-types";
import StackGrid from "react-stack-grid";
import Thumbnail from "./Thumbnail";
import { PHOTOS_SHAPE } from "./constants";
import refinePhotos from "../../helpers/refinePhotos";

class PhotoGrid extends Component {
  render() {
    const { photos, selectedFilters, selectedTags } = this.props;
    const width = 250;

    let items = [];

    if (photos.length) {
      const filteredPhotos = refinePhotos(
        photos,
        selectedFilters,
        selectedTags
      );

      if (filteredPhotos.length) {
        items = filteredPhotos.map((v, i) => {
          return <Thumbnail key={i} photo={v} width={width} />;
        });
      }
    }

    return (
      <StackGrid
        columnWidth={width}
        monitorImagesLoaded={true}
        gutterWidth={30}
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
