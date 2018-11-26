const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",

    entry: path.resolve(__dirname, "src/index.js"),

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js"
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            }
        ]
    },

    plugins: [
        new HtmlPlugin()
    ]
};