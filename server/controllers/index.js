import express from "express";
import path from "path";
import serverRenderer from "../middleware/renderer";
import configureStore from "../../src/store/configureStore";
import { setMessage } from "../../src/store/appReducer";
import fetchAllPhotos from "../api/fetchAllPhotos";

const router = express.Router();

const actionIndex = (req, res, next) => {
  fetchAllPhotos().then(result => {
    console.log("result", result);
    const preloadedState = { result };
    const store = configureStore(preloadedState);
    store.dispatch(setMessage("Hi, I'm from server! Test"));
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
