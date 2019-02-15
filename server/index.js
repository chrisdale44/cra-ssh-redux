import express from "express";
import Loadable from "react-loadable";
import indexController from "./controllers";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(indexController);

Loadable.preloadAll().then(() => {
  app.listen(PORT, error => {
    if (error) {
      return console.log("something bad happened", error);
    }

    console.log("Server listening on " + PORT + "...");
  });
});
