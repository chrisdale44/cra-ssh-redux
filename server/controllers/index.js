import express from "express";
import path from "path";
import serverRenderer from "../middleware/renderer";
import configureStore from "../../src/store/configureStore";
import { fetchAllPhotos } from "../../src/store/photos";

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

const actionIndex = (req, res, next) => {
  const store = configureStore();
  store.dispatch(fetchAllPhotos(API_URL)).then(() => {
    serverRenderer(store)(req, res, next);
  });
};

router.use("^/$", actionIndex);

router.use(
  express.static(path.resolve(__dirname, "..", "..", "build"), {
    maxAge: "30d"
  })
);

export default router;
