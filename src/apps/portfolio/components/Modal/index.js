import React, { Component } from "react";
import classNames from "classnames/bind";
import ReactDOM from "react-dom";
import componentStyles from "./Modal.module.css";
import icons from "../../icons/icons.module.css";
const styles = { ...componentStyles, ...icons };

let cx = classNames.bind(styles);

class Modal extends Component {
  constructor(props) {
    super(props);
    this.modalRoot = document.getElementById("modal-root");
    this.el = document.createElement("div");
    this.html = document.getElementsByTagName("html")[0];
  }

  componentDidMount() {
    this.modalRoot.appendChild(this.el);
    this.html.classList.add("modal-open");
  }

  componentWillUnmount() {
    this.modalRoot.removeChild(this.el);
    this.html.classList.remove("modal-open");
  }

  render() {
    const { onClose, children } = this.props;

    return ReactDOM.createPortal(
      <div className={styles.backdrop} onClick={onClose}>
        <div className={styles.modal}>
          {children}
          <button
            onClick={onClose}
            className={cx(styles.close, styles.cross)}
          />
        </div>
      </div>,
      this.el
    );
  }
}

export default Modal;
