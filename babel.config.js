const presets = [
  [
    "@babel/preset-env",
    {
      targets: {
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "11.1"
      },
      useBuiltIns: "usage"
    }
  ],
  ["@babel/preset-react"]
];

const plugins = [
  "@babel/plugin-syntax-dynamic-import",
  "babel-plugin-transform-dynamic-import",
  "react-loadable/babel"
];

module.exports = { presets, plugins };
