import path from "path"
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import cssnano from 'cssnano'
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const tsRule = (configFile) => ({
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: [
        {
            loader: "ts-loader",
            options: configFile ? { configFile } : {},
        },
    ],
});

const lessRule = (minify = false) => ({
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
                    plugins: minify ? [cssnano] : [],
                },
            },
        },
        "less-loader",
    ],
});

const commonResolve = {
    extensions: [".tsx", ".ts", ".js"],
};

const baseConfig = (isProd, minify) => ({
    name: "stacks" + (minify ? ".min" : ""),
    // run the minified bundle first, then the unminified bundle
    dependencies: minify ? [] : ["stacks.min"],
    mode: isProd ? "production" : "development",
    devtool: isProd ? false : "inline-source-map",
    entry: {
        // add .min to the file names of minified bundles
        [minify ? "stacks.min" : "stacks"]: path.resolve(
            __dirname,
            "lib/index.ts"
        ),
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
        rules: [tsRule("tsconfig.build.json"), lessRule(minify)],
    },
    optimization: {
        minimize: minify,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: `css/[name].css`,
        }),
    ],
    resolve: commonResolve,
});

export { tsRule, lessRule, commonResolve };

// build the bundle twice - once minified and once not
export default [
    (_, argv) => baseConfig(argv.mode === "production", true),
    (_, argv) => baseConfig(argv.mode === "production", false),
];
