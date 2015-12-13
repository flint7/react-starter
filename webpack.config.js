module.exports = {

    entry: [
        "./examples/index"
    ],

    devtool: "cheap-module-eval-source-map",

    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }

};
