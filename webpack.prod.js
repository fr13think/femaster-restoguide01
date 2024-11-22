const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
const ImageminMozjpeg = require('imagemin-mozjpeg');
const ImageminPngquant = require('imagemin-pngquant');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                        },
                    },
                ],
            },
        ],
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 20000,
            maxSize: 70000,
            minChunks: 1,
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            automaticNameDelimiter: '~',
            enforceSizeThreshold: 50000,
            cacheGroups: {
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
            },
        },
        minimizer: [
            '...',
            new CssMinimizerPlugin(),
        ],
    },
    plugins: [
        new WorkboxWebpackPlugin.GenerateSW({
            swDest: './sw.bundle.js',
            runtimeCaching: [
                {
                    urlPattern: ({url}) => url.href.startsWith('https://restaurant-api.dicoding.dev/'),
                    handler: 'StaleWhileRevalidate',
                    options: {
                        cacheName: 'restaurant-api',
                    },
                },
                {
                    urlPattern: ({url}) => url.href.startsWith('https://restaurant-api.dicoding.dev/images/'),
                    handler: 'StaleWhileRevalidate',
                    options: {
                        cacheName: 'restaurant-image-api',
                    },
                },
            ],
        }),
        new ImageminWebpackPlugin({
            plugins: [
                ImageminMozjpeg({
                    quality: 50,
                    progressive: true,
                }),
                ImageminPngquant({
                    quality: [0.3, 0.5],
                }),
            ],
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
    ],
});