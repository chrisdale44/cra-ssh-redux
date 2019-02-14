import React, { Component } from "react";
import Loadable from "react-loadable";
import "./App.css";

const AsyncComponent = Loadable({
  loader: () => import("./Header"),
  loading: () => <div>loading...</div>
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
