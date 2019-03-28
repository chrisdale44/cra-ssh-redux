import AsyncLoader from "../AsyncLoader.js";

const AsyncPortfolio = AsyncLoader({
  loader: () => import(/* webpackChunkName: "home" */ "./App"),
  modules: ["home"]
});

export default AsyncPortfolio;
