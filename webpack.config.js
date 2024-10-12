const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const pages = ['index', 'height-converter', 'temperature-converter', 'weight-converter'];

module.exports = {
    entry: pages.reduce((config, page) => {
        config[page] = `./src/pages/${page}/${page}.js`;
        return config;
    }, {}),

    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },

    module: {
        rules: [
            {test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader']},
        ]
    },


    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'bundle-[contenthash].css'
        }),

        ...pages.map(
            (page) =>
                new HtmlWebpackPlugin({
                    template: `./src/pages/${page}/${page}.html`,
                    filename: `${page}.html`,
                    chunks: [page],
                })
        )
    ],
};
