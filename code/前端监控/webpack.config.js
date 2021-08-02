const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode:'development',
  entry: './src/index.js',
  context: process.cwd(),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'monitor.js'
  },
  devServer:{
    contentBase: path.resolve(__dirname, 'dist')
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'head'
    })
  ]

}