import express from "express";
import path from "path";
// import renderer from "../middleware/renderer";
import reduxRenderer from "../middleware/reduxRenderer";
import configureStore from "../../src/apps/photography/store/configureStore";
import { fetchAllPhotos } from "../../src/apps/photography/store/photos";

const router = express.Router();
const {
  API_KEY,
  API_SECRET,
  CLOUD_NAME,
  CLOUD_BASE,
  PHOTOS_PATH,
  MAX_RESULTS
} = process.env;
const API_URL = `https://${API_KEY}:${API_SECRET}@${CLOUD_BASE}${CLOUD_NAME}${PHOTOS_PATH}?max_results=${MAX_RESULTS}&tags=true&context=true`;

router.use(
  express.static(path.resolve(__dirname, "..", "..", "build"), {
    maxAge: "30d"
  })
);
router.use("^/photography", (req, res) => {
  const store = configureStore();
  console.log("=== fetchAllPhotos");
  store.dispatch(fetchAllPhotos(API_URL)).then(() => {
    reduxRenderer(store)(req, res);
  });
});
// router.use("^/*", (req, res) => {
//   console.log("=== not fetchingAllPhotos");
//   renderer()(req, res, next);
// });

export default router;
