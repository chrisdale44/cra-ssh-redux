import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import Loadable from "react-loadable";
import manifest from "../../build/asset-manifest.json";

import App from "../../src/apps/portfolio";

import path from "path";
import fs from "fs";

export default () => (req, res) => {
  const filePath = path.resolve(__dirname, "..", "..", "build", "index.html");
  const modules = [];
  const context = {};

  const html = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <Loadable.Capture report={m => modules.push(m)}>
        <App />
      </Loadable.Capture>
    </StaticRouter>
  );

  const getBundles = (assets, chunks) =>
    Object.keys(assets)
      .filter(asset => chunks.indexOf(asset.replace(".js", "")) > -1)
      .map(k => assets[k]);

  const bundles = getBundles(manifest, modules).map(
    c => `<script type="text/javascript" src="${c}"></script>`
  );

  fs.readFile(filePath, "utf8", (err, htmlData) => {
    if (err) {
      console.error("err", err);
      return res.status(404).end();
    }

    return res.send(
      htmlData
        .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
        .replace("</body>", bundles.join("") + "</body>")
    );
  });
};
