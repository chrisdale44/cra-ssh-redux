import React, { Component } from "react";
import Slider from "react-slick";
import styles from "./Projects.module.css";

class CodeSamples extends Component {
  render() {
    const { samples } = this.props;
    const settings = {
      dots: true,
      slidesToShow: 2,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0
          }
        }
      ]
    };
    return (
      <section>
        <h2>Code Samples</h2>
        <div className={styles.sliderContainer}>
          <Slider {...settings}>
            {samples.map(({ title, technologies }, i) => (
              <div>
                <div key={i} className={styles.sampleTile}>
                  <h3>{title}</h3>
                  <span>{technologies && technologies.map(t => t + ", ")}</span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    );
  }
}

export default CodeSamples;
