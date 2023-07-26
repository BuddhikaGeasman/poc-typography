import path from "path";
import webpack, { Configuration as WebpackConfiguration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import common from "./webpack.common";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const config: Configuration = {
  ...common,
  mode: "production",
  resolve: {
    symlinks: false,
  },
  devtool: "source-map",
  target: "web",
  output: {
    filename: "[name].[contenthash].js",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      minify: false,
      inject: true,
    }),
  ],
};

export default config;
