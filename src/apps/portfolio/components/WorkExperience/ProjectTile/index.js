import React, { Component } from "react";
import Modal from "../../Modal";
import Header from "../Header";
import styles from "./ProjectTile.module.css";

class ProjectTile extends Component {
  state = {
    modalOpen: false
  };

  toggleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen
    });
  };

  render() {
    const {
      title,
      startDate,
      endDate,
      technologies,
      logo,
      description,
      responsibilities,
      image
    } = this.props;

    const { modalOpen } = this.state;

    return (
      <>
        <div className={styles.slideContainer}>
          <div className={styles.imageTile} onClick={this.toggleModal}>
            <img src={image} alt={title} />
            <h3>{title}</h3>
          </div>
        </div>
        {modalOpen && (
          <Modal onClose={this.toggleModal}>
            <Header
              title={title}
              startDate={startDate}
              endDate={endDate}
              technologies={technologies}
              logo={logo}
            />
            <article>
              <p>{description}</p>
              {responsibilities && (
                <ul>
                  {responsibilities.map((responsibility, i) => (
                    <li key={i}>{responsibility}</li>
                  ))}
                </ul>
              )}
            </article>
          </Modal>
        )}
      </>
    );
  }
}

export default ProjectTile;
