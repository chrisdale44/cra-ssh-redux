import React, { Component } from "react";
import logo from "./logo.svg";
import { connect } from "react-redux";
import { setMessage } from "./store/appReducer";

class Header extends Component {
  componentDidMount() {
    // if (!this.props.message) {
    this.props.updateMessage("Hi, I'm from client!");
    // }
  }
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Redux: {this.props.message}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    );
  }
}

export default connect(
  ({ app }) => ({
    message: app.message
  }),
  dispatch => ({
    updateMessage: txt => dispatch(setMessage(txt))
  })
)(Header);
