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

    const reduxState = `<script type="text/javascript" charset="utf-8">
    window.REDUX_STATE = ${JSON.stringify(store.getState())};
  </script>`;

    const getBundles = (assets, chunks) =>
      Object.keys(assets)
        .filter(asset => chunks.indexOf(asset.replace(".js", "")) > -1)
        .map(k => assets[k]);

    const bundles = getBundles(manifest, modules).map(
      c => `<script type="text/javascript" src="${c}"></script>`
    );

    return res.send(
      htmlData
        .replace("</head>", reduxState, "</head>")
        .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
        .replace("</body>", bundles.join("") + "</body>")
    );
  });
};
