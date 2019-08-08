const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let babelOptions = {
    presets: ['@babel/preset-env']
};

module.exports = {
    mode: 'production',
    entry: {
        stacks: './lib/ts/index.ts',
        'stacks.polyfills': './lib/js/stacks.polyfills.js' //TODO need to keep as separate file?
    },
    devtool: 'source-map',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist2') //TODO change to dist, just using dist2 as a debug tool
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: babelOptions
                    },
                    {
                        loader: 'ts-loader'
                    }
                ]
            },
            //TODO remove all js files and remove this section
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: babelOptions
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    'less-loader',
                ],
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin()
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    }
};