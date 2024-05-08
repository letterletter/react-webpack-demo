const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts|js)?$/,
        exclude: /node_modules\/(?!(@mybricks)\/).*/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-react",
              '@babel/preset-env',
            //   [
            //     "@babel/preset-env",
            //     {
            //       useBuiltIns: "usage",
            //       corejs: 3,
            //       targets: "> 0.25%, not dead",
            //     },
            //   ],
              "@babel/preset-typescript",
            ],
          },
        },
      },
    //   {
    //     test: /\.(j)sx?$/,
    //     exclude: /node_modules/,
    //     use: {
    //       loader: "babel-loader",
    //       options: {
    //         presets: [
    //           "@babel/preset-react",
    //           "@babel/preset-env",
    //           "@babel/preset-typescript",
    //         ],
    //       },
    //     },
    //   },
      {
        test: /.css$/, //匹配 css 文件
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
      filename: "index.html",
    }),
  ],
  devServer: {
    open: true,
    hot: true,
    compress: true,
    port: 9000,
  },
};
