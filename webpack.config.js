const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const baseConfig = (isProd, minify) => ({
    name: "stacks" + (minify ? ".min" : ""),
    // run the minified bundle first, then the unminified bundle
    dependencies: minify ? [] : ["stacks.min"],
    mode: isProd ? "production" : "development",
    devtool: isProd ? false : "inline-source-map",
    entry: {
        // add .min to the file names of minified bundles
        [minify ? "stacks.min" : "stacks"]: "./lib/ts/index.ts",
    },
    output: {
        filename: `js/[name].js`,
        path: path.resolve(__dirname, "dist"),
        // don't empty out the dist folder when running the second build
        clean: minify,
        compareBeforeEmit: true,
        library: "Stacks",
        libraryTarget: "umd",
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    "ts-loader",
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
                        options: {
                            postcssOptions: {
                                plugins: minify ? [require('cssnano')] : [],
                            }
                        },
                    },
                    "less-loader",
                ],
            },
        ],
    },
    optimization: {
        minimize: minify,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: `css/[name].css`,
        })
    ],
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
});

// build the bundle twice - once minified and once not
module.exports = [
    (_, argv) => baseConfig(isProd = argv.mode === "production", true),
    (_, argv) => baseConfig(isProd = argv.mode === "production", false),
];