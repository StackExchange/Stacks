import { merge } from 'webpack-merge';
import common from './webpack.common';

export default (...args: Parameters<typeof common>) => merge(
    common(...args),
    {
        mode: 'development',
        devtool: 'inline-source-map',
    },
)
