import React, { Component } from "react";
import PropTypes from "prop-types";
import StackGrid from "react-stack-grid";
import Thumbnail from "./Thumbnail";
import LoadingTile from "../LoadingTile";
import { PHOTOS_SHAPE } from "./constants";
import { FILTER_IDS } from "../../store/filters";
// import styles from "./PhotoGrid.module.css";

class PhotoGrid extends Component {
  refinePhotosByFilter = photos => {
    const { selectedFilters } = this.props;
    if (!photos.length) {
      return;
    }

    if (!Object.keys(selectedFilters).length) {
      return photos;
    }

    return photos.reduce((acc, photo) => {
      if (
        !FILTER_IDS.find(
          filterId =>
            selectedFilters[filterId] &&
            selectedFilters[filterId] !== photo[filterId]
        )
      ) {
        acc.push(photo);
      }
      return acc;
    }, []);
  };

  refinePhotosByTag = photos => {
    const { selectedTags } = this.props;
    return photos.reduce((acc, photo, i) => {
      if (
        !selectedTags.length ||
        !selectedTags.find(tag => photo.tags.indexOf(tag) === -1)
      ) {
        acc.push(photo);
      }
      return acc;
    }, []);
  };

  render() {
    const { photos } = this.props;
    const width = 200;

    let items = [];

    if (photos.length) {
      const filteredPhotos = this.refinePhotosByTag(
        this.refinePhotosByFilter(photos)
      );

      if (filteredPhotos.length) {
        items = filteredPhotos.map((v, i) => {
          return <Thumbnail key={i} photo={v} width={width} />;
        });
      }
    }

    if (!items.length) {
      for (let i = 0; i < 14; i++) {
        items.push(<LoadingTile key={i} />);
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
