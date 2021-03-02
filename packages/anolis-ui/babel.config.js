module.exports = {
  presets: [
    "@babel/preset-env",
    ["@babel/preset-react", {
      runtime: "automatic"
    }],
    "@babel/preset-typescript",
    "@xstyled/babel-preset-emotion-css-prop"
  ],
  plugins: [
    "@babel/plugin-transform-runtime"
  ]
};
