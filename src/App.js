import React, { Component } from "react";
import Loadable from "react-loadable";
import styles from "./App.module.css";

const AsyncComponent = Loadable({
  loader: () =>
    import(/* webpackChunkName: "photography" */ "./pages/Photography"),
  loading: () => <div>loading...</div>,
  modules: ["photography"]
});

class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <AsyncComponent />
      </div>
    );
  }
}

export default App;
