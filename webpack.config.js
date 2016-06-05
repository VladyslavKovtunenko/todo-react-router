module.exports = {
    entry: "./index.js",
    devtool: 'source-map',
    resolve: {
        modulesDirectories: ['src', 'css', 'node_modules'],
        alias: {
        },
        extensions: ['', '.js', '.jsx']
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
                loaders: ["style", "css", "sass"]
            }
        ]
    }
};