const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const DIST_DIR = path.resolve(__dirname, "dist");
const SRC_DIR = path.resolve(__dirname, "src");

module.exports = {
    mode: "development",
    entry: SRC_DIR + "/app/index.js",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Portfolio Website",
            filename: "index.html",
            template: "src/template.html"
        })
    ],
    module: {
        rules:[
            {
                test: /\.?js$/,
                exclude: /node_modules/,
                use:{
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            }
        ]
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist/app")
        },
        port: 3000,
        open: true,
        compress: true,
        hot: true,
        historyApiFallback: true
    }
}