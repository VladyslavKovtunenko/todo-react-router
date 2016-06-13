var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: "./index.js",
    devtool: 'source-map',
    resolve: {
        modulesDirectories: ['src', 'css', 'node_modules'],
        alias: {
        },
        extensions: ['', '.js', '.jsx', '.css', '.scss']
    },
    output: {
        path: "./",
        filename: "bundle.js"
    },
    devServer: {
        proxy: {
            '/api/v1*': {
                target: ' http://tasks-for-day.herokuapp.com',
                changeOrigin: true
            }
        },
        historyApiFallback: true
    },
    plugins: [
        new ExtractTextPlugin('styles.css')
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel",
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                },
                exclude: [/node_modules/]
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader'),
                exclude: [/node_modules/]
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=25000'
            }
        ]
    }
};