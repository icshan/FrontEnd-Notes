let path = require("path");
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "build.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolveLoader: {
    modules: ["node_modules", path.resolve(__dirname, "loaders")],
    // 别名
    // alias: {
    //   loader1: path.resolve(__dirname, "loaders", "loader1.js")
    // },
  },
  devtool: "source-map",
  module: {
    // loader 分类(enforce) ：pre 在前面的  post 在后面的  normal
    // loader 顺序依次： pre --> normal --> inline  -->post
    rules: [
      // loader 顺序问题， 从右向左，从下至上
      // {
      //   test: /\.js$/,
      //   use: ["loader3", "loader2", "loader1"],
      // },
      // 实现babel-loader
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.js$/,
        use: {
          loader: 'author-loader',
          options: {
            text: 'kester',
            filename: path.resolve(__dirname, 'author.js')
          }
        },
      },
      {
        test: /\.png$/,
        // 目的是根据图片生成md5 发射到dist目录下，file-loader 返回当前图片路径
        // use: 'file-loader'
        // 处理路径
        use: {
            loader: 'url-loader1',
            options: {
                limit: 200 * 1024
            }
        }
    }

    ],
  },
};
