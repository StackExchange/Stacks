const fs = require("fs");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (_, argv) => {
    const isProd = argv.mode === "production"

    // load each entry.*.js file in assets/js as its own bundle
    const entries = fs.readdirSync(path.resolve(__dirname, "assets/js/"))
        .filter(f => f.startsWith("entry."))
        .reduce((p, n) => {
            // { "entry.file": "path/to/entry.file.js" }
            p[n.slice(0, -3)] = path.resolve(__dirname, "assets/js/", n);
            return p;
        }, {});

    return {
        mode: isProd ? "production" : "development",
        devtool: isProd ? false : "inline-source-map",
        entry: {
            docs: path.resolve(__dirname, "assets/js/index.ts"),
            ...entries
        },
        output: {
            filename: "[name].js",
            path: path.resolve(__dirname, "assets/dist"),
            clean: true,
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    use: [
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
            new MiniCssExtractPlugin()
        ],
        resolve: {
            extensions: [".tsx", ".ts", ".js"],
        },
    };
};
