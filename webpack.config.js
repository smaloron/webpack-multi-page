const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        index: './src/pages/index/index.js',
        'height-converter': './src/pages/height-converter/height-converter.js',
        'temperature-converter': './src/pages/temperature-converter/temperature-converter.js',
        'weight-converter': './src/pages/weight-converter/weight-converter.js'
    },

    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },

    module: {
        rules: [
            {test: /\.(png|jpg|ttf)$/, type: 'asset'},
            {test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader']},
        ]
    },

    plugins: [
        new TerserPlugin(),
        new MiniCssExtractPlugin({
            filename: 'bundle-[contenthash].css'
        }),

        new HtmlWebpackPlugin({
            template: './src/pages/index/index.html',
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/height-converter/height-converter.html',
            filename: 'height-converter.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/weight-converter/weight-converter.html',
            filename: 'weight-converter.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/temperature-converter/temperature-converter.html',
            filename: 'temperature-converter.html',
        })
    ],
};
