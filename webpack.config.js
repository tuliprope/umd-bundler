const webpack = require('webpack');
const path = require('path');
const Clean = require('webpack-clean-plugin');

module.exports = {
    entry: 'lodash/throttle',
    output: {
        path: path.resolve(__dirname, 'dist'), // 输出根目录
        publicPath: '/',
        filename: `throttle.js`, // 输出文件目录 及文件名格式
        library: {
            commonjs: 'throttle'
        },
        libraryTarget: 'commonjs'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }]
            }
        ]
    },
    plugins: [
        new Clean(['dist'])
    ],
    mode: 'development'
}