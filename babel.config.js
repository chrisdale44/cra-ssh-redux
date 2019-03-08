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
  "@babel/plugin-transform-object-assign",
  "@babel/plugin-syntax-dynamic-import",
  "babel-plugin-transform-dynamic-import",
  "@babel/plugin-proposal-class-properties",
  "react-loadable/babel"
];

module.exports = { presets, plugins };
