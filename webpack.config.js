module.exports = {
    entry: "./index.js",
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
        }
    },
    module: {
        loaders: [
            {
                loader: "babel-loader",
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                }
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            }
        ]
    }
};