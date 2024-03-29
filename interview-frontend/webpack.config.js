const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: "./index.tsx",
  target: "web",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "app/build"),
    filename: "bundle.js",
  },
  devServer: {
    host: '0.0.0.0',
    contentBase: './app/components',
    historyApiFallback: true,
    overlay: true,
    compress: true,
    stats: 'errors-only'
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "awesome-typescript-loader",
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
      {
        test: /\.css$/,
        loader: "css-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "app", "components", "index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "./app/yourfile.css",
    }),
  ],
};
