import { resolve } from 'path';
import { Configuration } from 'webpack';

export default (): Configuration => ({
    context: resolve(__dirname, 'lib', 'ts'),
    entry: {
        stacks: './browser.ts',
        'stacks.min': './browser.ts',
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'esbuild-loader',
                    options: {
                        loader: 'tsx',
                        target: 'es2020',
                        tsconfigRaw: require('./tsconfig.json'),
                    },
                },
            },
        ],
    },
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
});
