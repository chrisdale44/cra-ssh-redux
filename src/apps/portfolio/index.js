import React from "react";
import Loadable from "react-loadable";

const AsyncPortfolio = Loadable({
  loader: () => import(/* webpackChunkName: "home" */ "./App"),
  loading: () => <div>loading...</div>,
  modules: ["home"]
});

export default AsyncPortfolio;
