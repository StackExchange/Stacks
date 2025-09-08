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
                        "postcss-loader",
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
        devServer: {
            webSocketURL: {
                // 11ty/browsersync steal the default port (8080), so set it to something else
                port: 8081
            }
        }
    };
};
