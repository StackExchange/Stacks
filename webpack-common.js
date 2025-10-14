const MiniCssExtractPlugin = require("mini-css-extract-plugin");

exports.tsRule = (configFile) => ({
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: [
        {
            loader: "ts-loader",
            options: configFile ? { configFile } : {},
        },
    ],
});

exports.lessRule = (minify = false) => ({
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
                    plugins: minify ? [require("cssnano")] : [],
                },
            },
        },
        "less-loader",
    ],
});

exports.miniCssPlugin = (filename = "css/[name].css") =>
    new MiniCssExtractPlugin({ filename });

exports.commonResolve = {
    extensions: [".tsx", ".ts", ".js"],
};

exports.commonDevServer = {
    webSocketURL: {
        // 11ty/browsersync steal the default port (8080), so set it to something else
        port: 8081,
    },
};