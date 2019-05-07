import React, { Component } from "react";
import ReactDOM from "react-dom";
import componentStyles from "./Modal.module.css";
import icons from "../../icons/icons.module.css";
const styles = { ...componentStyles, ...icons };

class Modal extends Component {
  constructor(props) {
    super(props);
    this.modalRoot = document.getElementById("modal-root");
    this.el = document.createElement("div");
  }

  componentDidMount() {
    this.modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    this.modalRoot.removeChild(this.el);
  }

  render() {
    const { onClose, children } = this.props;

    return ReactDOM.createPortal(
      <div className={styles.backdrop} onClick={onClose}>
        <div className={styles.modal}>
          {children}
          <button onClick={onClose}>Close</button>
        </div>
      </div>,
      this.el
    );
  }
}

export default Modal;
