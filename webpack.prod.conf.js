var config = require('./webpack.config.js');

config.output.path = require('path').resolve('./assets/bundles/');
config.output.pathName = './assets/bundles/'; // This will override the url generated by django's staticfiles

config.plugins = [
    new BundleTracker({filename: './webpack-stats-prod.json'}),

    // removes a lot of debugging code in React
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('production')
        }
    }),

    // keeps hashes consistent between compilations
    new webpack.optimize.OccurenceOrderPlugin(),

    // minifies your code
    new webpack.optimize.UglifyJsPlugin({
        compressor: {
            warnings: false
        }
    })
];
