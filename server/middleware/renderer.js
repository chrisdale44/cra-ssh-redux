import React from "react";
import ReactDOMServer from "react-dom/server";
import Loadable from "react-loadable";
import manifest from "../../build/asset-manifest.json";
import { Provider as ReduxProvider } from "react-redux";

import App from "../../src/App";

import path from "path";
import fs from "fs";

export default store => (req, res, next) => {
  const filePath = path.resolve(__dirname, "..", "..", "build", "index.html");

  fs.readFile(filePath, "utf8", (err, htmlData) => {
    if (err) {
      console.error("err", err);
      return res.status(404).end();
    }
    const modules = [];

    const html = ReactDOMServer.renderToString(
      <Loadable.Capture report={m => modules.push(m)}>
        <ReduxProvider store={store}>
          <App />
        </ReduxProvider>
      </Loadable.Capture>
    );

    const reduxState = JSON.stringify(store.getState());

    const extractAssets = (assets, chunks) => {
      const res = Object.keys(assets)
        .filter(asset => {
          const y = asset.replace(".js", "");
          const x = chunks.indexOf(y) > -1;
          console.log("yx", y, x);
          return x;
        })
        .map(k => assets[k]);
      console.log("assets", assets);
      console.log("chunks", chunks);
      console.log("res", res);
      return res;
    };

    const extraChunks = extractAssets(manifest, modules).map(
      c => `<script type="text/javascript" src="${c}"></script>`
    );

    return res.send(
      htmlData
        .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
        .replace("</body>", extraChunks.join("") + "</body>")
        .replace('"__SERVER_REDUX_STATE__"', reduxState)
    );
  });
};
