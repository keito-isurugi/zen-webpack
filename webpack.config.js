const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// const isDev = process.env.NODE_ENV === "development";
const isDev = process.env.NODE_ENV === "production";

/** @type {import('webpack').Configuration} */
module.exports = {
  mode: isDev ? "development" : "production",
  resolve: {
    extensions: [".js", ".json", ".jsx", ".ts", ".tsx"],
  },
  entry: {
    // main: "./src/index.jsx",
    // admin: "./src/adminIndex.jsx"
    main: "./src/index.tsx",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "asset/images/[name][ext]",
  },
  module: {
    rules: [
      // {
      //   test: /\.jsx?$/,
      //   loader: "babel-loader",
      // },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: isDev,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: isDev,
            },
          },
        ],
      },
      {
        test: /\.(ico|png|svg|ttf|otf|eot|woff?2?)$/,
        type: "asset/resource",
      },
    ],
  },
  // import 文で .ts や .tsx ファイルを解決するため
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  // ES5(IE11等)向けの指定（webpack 5以上で必要）
  target: ["web", "es5"],
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: "body",
      scriptLoading: "defer",
    }),
  ],
  devtool: isDev ? "source-map" : undefined,
  devServer: {
    static: {
      directory: "./dist",
    },
  },
};