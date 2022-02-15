import { merge } from 'webpack-merge';
import common from './webpack.common';
import * as TerserPlugin from "terser-webpack-plugin";

export default (...args: Parameters<typeof common>) => merge(
    common(...args),
    {
        mode: 'production',
        optimization: {
            minimizer: [
                new TerserPlugin({
                    include: /\.min\./,
                    terserOptions: {
                        format: { comments: false },
                    },
                    extractComments: false,
                })
            ]
        }
    },
)
