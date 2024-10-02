const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
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
            {test: /\.(png|jpg|ttf)$/, type: 'asset'},
            {
                'test': /\.js$/,
                'exclude': /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        targets: 'defaults',
                        presets: [
                            ['@babel/preset-env']
                        ]
                    }
                }
            },
            {test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader']},
        ]
    },

    /*
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },*/

    plugins: [
        new TerserPlugin(),
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

    devServer: {
        static: './dist',
    },
};
