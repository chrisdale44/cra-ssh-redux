import React, { Component } from "react";
import PropTypes from "prop-types";
import StackGrid from "react-stack-grid";
import throttle from "lodash.throttle";
import isEqual from "lodash.isequal";
import window from "global";
import { PHOTOS_SHAPE } from "./constants";

import styles from "./PhotoGrid.module.css";
import { DESKTOP, MOBILE } from "../constants";
import { InView } from "react-intersection-observer";

class PhotoGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gridLayoutFinished: false
    };
  }

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
  layoutCounter = 0;

  componentWillMount() {
    window.onresize = throttle(this.handleResize, 100);
    this.setDimensions(window.innerWidth);
  }

  componentDidUpdate(prevProps) {
    if (!isEqual(prevProps.photos, this.props.photos)) {
      this.setState({
        gridLayoutFinished: false
      });
    }
  }

  onLayout = () => {
    const { photos } = this.props;
    const { gridLayoutFinished } = this.state;
    this.layoutCounter++;
    if (this.layoutCounter >= photos.length && !gridLayoutFinished) {
      setTimeout(() => {
        this.setState({
          gridLayoutFinished: true
        });
      }, 2);
    }
  };

  handleLazyLoad(inView, entry) {
    if (!inView) {
      return;
    }

    const img = entry.target.querySelector("img");
    img.src = img.getAttribute("data-src");
    img.removeAttribute("data-src");
  }

  handleResize = e => {
    if (!e || !e.target || !e.target.innerWidth) {
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

  handleClick = (publicId, secureUrl) => {
    const { setOpenPhoto } = this.props;
    setOpenPhoto(publicId, secureUrl);
  };

  render() {
    const { photos } = this.props;
    const { gutterWidth, columnWidth, gridLayoutFinished } = this.state;
    const transform = `c_scale,w_${columnWidth}`;

    let items = [];

    if (photos.length) {
      items = photos.map(
        ({ secure_url, height, width, caption, public_id }, i) => {
          const photoUrl = secure_url.split("/");
          const spliceIndex = photoUrl.indexOf(public_id.split("/")[0]);
          photoUrl.splice(spliceIndex, 0, transform);

          const imgHeight = (columnWidth / width) * height;
          const inlineCSS = { height: imgHeight, width: columnWidth };

          if (gridLayoutFinished) {
            return (
              <InView onChange={this.handleLazyLoad} key={i} triggerOnce={true}>
                {({ ref }) => (
                  <div
                    ref={ref}
                    className={styles.thumbnailWrapper}
                    style={inlineCSS}
                  >
                    <img
                      data-src={photoUrl.join("/")}
                      alt={caption}
                      onClick={() => this.handleClick(public_id, secure_url)}
                    />
                  </div>
                )}
              </InView>
            );
          } else {
            return (
              <div
                key={i}
                className={styles.thumbnailWrapper}
                style={inlineCSS}
              />
            );
          }
        }
      );
    }

    return (
      <StackGrid
        columnWidth={columnWidth}
        monitorImagesLoaded={true}
        gutterWidth={gutterWidth}
        className={styles.container}
        onLayout={this.onLayout}
        duration={0}
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
