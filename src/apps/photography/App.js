import React, { Component } from "react";
import Loadable from "react-loadable";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./store/configureStore";
import dummyStore from "./dummyStore.json";

const devStore = process.env.NODE_ENV === "development" ? dummyStore : {};
const store = configureStore(window.REDUX_STATE || devStore || {});

const AsyncPhotography = Loadable({
  loader: () => import(/* webpackChunkName: "photography" */ "."),
  loading: () => <div>loading...</div>,
  modules: ["photography"]
});

class App extends Component {
  render() {
    return (
      <ReduxProvider store={store}>
        <AsyncPhotography />
      </ReduxProvider>
    );
  }
}

export default App;
