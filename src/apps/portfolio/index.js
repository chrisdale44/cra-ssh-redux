import AsyncLoader from "../AsyncLoader";

const AsyncPortfolio = AsyncLoader({
  loader: () => import(/* webpackChunkName: "home" */ "./App"),
  modules: ["home"]
});

export default AsyncPortfolio;
