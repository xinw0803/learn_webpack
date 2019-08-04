var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var DIST_PATH = path.resolve(__dirname, "../dist"); // 声明/dist的路径

module.exports = {
  // 入口js路径
  // 指示webpack应该使用哪个模块，来作为构建其内部依赖图的开始
  entry: path.resolve(__dirname, "../src/index.js"),

  // 编译输出的js入口路径
  // 告诉webpack在哪里输出它所创建的bundle,以及如何命名这些文件
  output: {
    path: DIST_PATH, // 创建的bundle生成到哪里
    filename: "bundle.js", // 创建的bundle的名称
  },

  // 模块解析
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },

  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "../src/index.html")
    })
  ]
}