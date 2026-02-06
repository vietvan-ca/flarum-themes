const config = require('flarum-webpack-config');

const webpackConfig = config();

// Disable source maps to prevent JSON errors in production
if (process.env.NODE_ENV === 'production') {
  webpackConfig.devtool = false;
}

module.exports = webpackConfig;