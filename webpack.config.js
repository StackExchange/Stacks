const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = (_, argv) => {
    const isProd = argv.mode === "production"
    return {
        mode: isProd ? "production" : "development",
        devtool: isProd ? false : "inline-source-map",
        entry: {
            // add the same entry twice, once to minify, once to not (see optimization entry below)
            "stacks": "./lib/ts/index.ts",
            "stacks.min": "./lib/ts/index.ts",
        },
        output: {
            filename: "js/[name].js",
            path: path.resolve(__dirname, "dist"),
            clean: true,
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
        optimization: {
            minimizer: [
                new TerserPlugin({
                    include: /\.min\./
                })
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: "css/[name].css",
            })
        ],
        resolve: {
            extensions: [".tsx", ".ts", ".js"],
        },
    };
};
