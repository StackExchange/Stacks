const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const baseConfig = require("../webpack.config");
const { merge } = require("webpack-merge");

module.exports = (env, argv) => {
    return merge(baseConfig(env, argv), {
        entry: {
            docs: path.resolve(__dirname, "assets/js/index.ts"),
        },
        output: {
            filename: "[name].js",
            path: path.resolve(__dirname, "assets/dist"),
        },
        module: {
            rules: [
                {
                    // TODO remove css imports from .js files and move to .less instead
                    test: /\.css$/,
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
                        }
                    ],
                },
            ],
        },
    });
};
