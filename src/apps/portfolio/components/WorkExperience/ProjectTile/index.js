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

  handleOnMouseDown(e) {
    this.setState({
      clientXonMouseDown: e.clientX,
      clientYonMouseDown: e.clientY
    });
    e.preventDefault();
  }

  handleOnClick(e) {
    e.stopPropagation();
    if (
      this.state.clientXonMouseDown !== e.clientX ||
      this.state.clientYonMouseDown !== e.clientY
    ) {
      e.preventDefault();
      return;
    }
    this.toggleModal();
  }

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
          <div
            className={styles.imageTile}
            onMouseDown={e => this.handleOnMouseDown(e)}
            onClick={e => this.handleOnClick(e)}
          >
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
