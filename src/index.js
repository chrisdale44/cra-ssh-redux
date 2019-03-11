import "@babel/polyfill";
import React from "react";
import ReactDOM from "react-dom";
import Loadable from "react-loadable";
import { Provider as ReduxProvider } from "react-redux";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import configureStore from "./store/configureStore";
import dummyStore from "./dummyStore.json";

const devStore = process.env.NODE_ENV === "development" ? dummyStore : {};
const store = configureStore(window.REDUX_STATE || devStore || {});

const AppBundle = (
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>
);

window.onload = () => {
  Loadable.preloadReady().then(() => {
    ReactDOM.hydrate(AppBundle, document.getElementById("root"));
  });
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
