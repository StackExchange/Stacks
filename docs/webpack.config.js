const path = require('path');
let config = require('../webpack.config');

module.exports = Object.assign({}, config, {
    entry: {
        stacks: './assets/js/index.ts',
        'stacks.polyfills': '../lib/js/stacks.polyfills.js' //TODO need to keep as separate file?
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'assets/dist')
    },
});