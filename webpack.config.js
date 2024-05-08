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
            //   '@babel/preset-env',
              [
                "@babel/preset-env",
                {
                  useBuiltIns: "usage",
                  corejs: 3,
                  targets: "> 0.25%, not dead",
                },
              ],
              "@babel/preset-typescript",
            ],
            plugins: [
                ['@babel/plugin-transform-runtime', {
                    "corejs": 3, // 当我们使用 ES6 的静态事件或内置对象时自动引入 babel-runtime/core-js
                    "helpers": true,// 避免内联的 helper 代码在多个文件重复出现，使用babel-runtime/helpers 来替换
                    "regenerator": true // 转换成使用regenerator runtime来避免污染全局域
                }]
              ]
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
