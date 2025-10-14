const path = require("path");
const { tsRule, lessRule, miniCssPlugin, commonResolve } = require("../../webpack-common");

const baseConfig = (isProd, minify) => ({
    name: "stacks" + (minify ? ".min" : ""),
    // run the minified bundle first, then the unminified bundle
    dependencies: minify ? [] : ["stacks.min"],
    mode: isProd ? "production" : "development",
    devtool: isProd ? false : "inline-source-map",
    entry: {
        // add .min to the file names of minified bundles
        [minify ? "stacks.min" : "stacks"]: path.resolve(__dirname, "lib/index.ts"),
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
            tsRule("tsconfig.build.json"),
            lessRule(minify),
        ],
    },
    optimization: {
        minimize: minify,
    },
    plugins: [
        miniCssPlugin(`css/[name].css`),
    ],
    resolve: commonResolve,
});

// build the bundle twice - once minified and once not
module.exports = [
    (_, argv) => baseConfig(isProd = argv.mode === "production", true),
    (_, argv) => baseConfig(isProd = argv.mode === "production", false),
];
