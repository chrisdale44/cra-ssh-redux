import "@babel/polyfill";
import React from "react";
import ReactDOM from "react-dom";
import Loadable from "react-loadable";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./index.css";
import * as serviceWorker from "./serviceWorker";
import configureStore from "./store/configureStore";
import dummyStore from "./dummyStore.json";

const devStore = process.env.NODE_ENV === "development" ? dummyStore : {};
const store = configureStore(window.REDUX_STATE || devStore || {});

const AsyncLoader = opts =>
  Loadable({
    loading: () => <div>loading...</div>,
    ...opts
  });

const AsyncHome = AsyncLoader({
  loader: () => import(/* webpackChunkName: "home" */ "./pages/Home"),
  modules: ["home"]
});

const AsyncPhotography = AsyncLoader({
  loader: () =>
    import(/* webpackChunkName: "photography" */ "./pages/Photography"),
  modules: ["photography"]
});

const AppBundle = (
  <ReduxProvider store={store}>
    <Router>
      <Route exact path="/" component={AsyncHome} />
      <Route path="/photography" component={AsyncPhotography} />
    </Router>
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
