import express from "express";
import path from "path";
import Loadable from "react-loadable";

import serverRenderer from "./middleware/renderer";

const PORT = process.env.PORT || 8080;
const app = express();
const router = express.Router();

router.use("*", serverRenderer);

router.use(
  express.static(path.resolve(__dirname, "..", "build"), { maxAge: "30d" })
);

app.use(router);

Loadable.preloadAll().then(() => {
  app.listen(PORT, error => {
    if (error) {
      return console.log("something bad happened", error);
    }

    console.log("Server listening on " + PORT + "...");
  });
});
