const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

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
    plugins: [
        new WorkboxWebpackPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true,
            swDest: 'sw.js',
            runtimeCaching: [
                {
                    urlPattern: new RegExp('^https://restaurant-api.dicoding.dev/'),
                    handler: 'StaleWhileRevalidate',
                    options: {
                        cacheName: 'restaurant-api',
                        cacheableResponse: {
                            statuses: [0, 200],
                        },
                    },
                },
                {
                    urlPattern: /^https:\/\/restaurant-api\.dicoding\.dev\/images\//,
                    handler: 'StaleWhileRevalidate',
                    options: {
                        cacheName: 'restaurant-image-api',
                        cacheableResponse: {
                            statuses: [0, 200],
                        },
                    },
                },
            ],
        }),
    ],
});