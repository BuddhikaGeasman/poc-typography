import path from "path";

const config = {
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        loader: "svg-sprite-loader",
        options: {
          esModule: true,
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|png|jpe?g|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true,
        },
        exclude: [/dist/, /node_modules/],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};

export default config;
