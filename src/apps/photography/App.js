import React, { Component } from "react";
import { Provider as ReduxProvider } from "react-redux";
import AsyncLoader from "../AsyncLoader";
import configureStore from "./store/configureStore";
import dummyStore from "./dummyStore.json";

const devStore = process.env.NODE_ENV === "development" ? dummyStore : {};
const store = configureStore(window.REDUX_STATE || devStore || {});

const AsyncPhotography = AsyncLoader({
  loader: () => import(/* webpackChunkName: "photography" */ "."),
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
