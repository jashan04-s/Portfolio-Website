const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const DIST_DIR = path.resolve(__dirname, "dist");
const SRC_DIR = path.resolve(__dirname, "src");

module.exports = {
    mode: "development",
    entry: SRC_DIR + "/app/index.js",
    output: {
        path: DIST_DIR,
        filename: "bundle.js",
        publicPath: "/",
        assetModuleFilename: "[name][ext]"
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
                test: /\.(png)$/i,
                type: "asset/resource",
            },
            {
                test: /\.css$/,
                use: ["style-loader","css-loader"],
                exclude: /node_modules/
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            }
        ],

    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist")
        },
        port: 3000,
        open: true,
        compress: true,
        hot: true,
        historyApiFallback: true
    }
}