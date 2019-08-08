const path = require('path');
let config = require('./webpack.config');

module.exports = Object.assign({}, config, {
    entry: {
        stacks: './docs/assets/js/index.ts',
        'stacks.polyfills': './lib/js/stacks.polyfills.js' //TODO need to keep as separate file?
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'docs/assets/dist') //TODO change to dist, just using dist2 as a debug tool
    },
});