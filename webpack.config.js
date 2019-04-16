const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: ["./src/index.js"]
  },
  output: {
    filename: "bundle.js"
  },
  devServer: {
    open: true
  },
  watch: true,
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./public/index.html"),
      filename: path.resolve(__dirname, "./dist/index.html")
    })
  ]
};
