import React, { Component } from "react";
import Loadable from "react-loadable";

const AsyncComponent = Loadable({
  loader: () =>
    import(/* webpackChunkName: "photography" */ "../src/apps/photography/App"),
  loading: () => <div>loading...</div>,
  modules: ["photography"]
});

class App extends Component {
  render() {
    return (
      <div style={{ display: "flex" }}>
        <AsyncComponent />
      </div>
    );
  }
}

export default App;
