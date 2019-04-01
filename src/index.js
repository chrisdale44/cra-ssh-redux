import "@babel/polyfill";
import React from "react";
import ReactDOM from "react-dom";
import Loadable from "react-loadable";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AsyncPortfolio from "./apps/portfolio";
import AsyncPhotography from "./apps/photography/App";
import "./styles/global.css";
import * as serviceWorker from "./serviceWorker";

const AppBundle = (
  <Router>
    <Route exact path="/" component={AsyncPortfolio} />
    <Route path="/photography" component={AsyncPhotography} />
  </Router>
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
