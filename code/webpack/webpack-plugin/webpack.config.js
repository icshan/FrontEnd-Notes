let path = require('path')
let DonePlugin = require('./plugins/DonePlugins')
let AsyncPlugins = require('./plugins/AsyncPlugins')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let FileListPlugin = require('./plugins/FileListPlugin')

let InlineSourcePlugins = require('./plugins/InlineSourcePlugins')

let MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    plugins: [
        // new DonePlugin(),
        // new AsyncPlugins(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'index.css'
        }),
        new InlineSourcePlugins({
            match: /\.(js|css)/
        }),
        // new FileListPlugin({
        //     filename: 'list.md'
        // })
    ]
}