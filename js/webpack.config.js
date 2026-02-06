const config = require('flarum-webpack-config');

const webpackConfig = config();

// Disable source maps to prevent JSON errors
webpackConfig.devtool = false;

module.exports = webpackConfig;