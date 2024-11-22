const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        client: {
            overlay: {
                errors: true,
                warnings: false,
            },
        },
        compress: true,
        port: 9000,
        open: true,
        hot: true,
    },
    optimization: {
        runtimeChunk: 'single',
    },
});