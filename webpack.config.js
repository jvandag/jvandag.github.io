const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const htmlPages = ['index', 'projects']; // List all your HTML pages here without the .html extension

module.exports = {
    mode: 'development',
    entry: {
        main: './src/js/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        clean: true,
    },
    target: 'web',
    devServer: {
        static: './dist',
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(js|ts)$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(svg|eot|ttf|woff|woff2)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(png|jpg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        ...htmlPages.map(page => new HtmlWebpackPlugin({
            template: path.resolve(__dirname, `./src/${page}.html`),
            chunks: ['main'],
            inject: 'body',
            filename: `${page}.html`,
        }))
    ],
};
