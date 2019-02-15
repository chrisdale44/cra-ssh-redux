import React, { Component } from "react";
import Loadable from "react-loadable";
import "./App.css";

const AsyncComponent = Loadable({
  loader: () => import(/* webpackChunkName: "header" */ "./Header"),
  loading: () => <div>loading...</div>,
  modules: ["header"]
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <AsyncComponent />
      </div>
    );
  }
}

export default App;
