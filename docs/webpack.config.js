//TODO merge with base config...

const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
    const isProd = argv.mode === "production"
    return {
        mode: isProd ? "production" : "development",
        devtool: isProd ? false : "inline-source-map",
        entry: {
            stacks: path.resolve(__dirname, "assets/js/index.ts"),
        },
        output: {
            filename: "[name].min.js",
            path: path.resolve(__dirname, "assets/dist"),
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: "babel-loader",
                            options: {
                                presets: ["@babel/preset-env"],
                            },
                        },
                        {
                            loader: "ts-loader",
                        },
                    ],
                },
                {
                    test: /\.less$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: "css-loader",
                            options: {
                                importLoaders: 1,
                                url: false,
                            },
                        },
                        {
                            loader: "postcss-loader",
                        },
                        "less-loader",
                    ],
                },
            ],
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: "[name].min.css",
            }),
            new CleanWebpackPlugin(),
            new webpack.EnvironmentPlugin({'NODE_ENV': 'development'})
        ],
        resolve: {
            extensions: [".tsx", ".ts", ".js"],
        },
    };
};
