const webpack = require('webpack');

module.exports = function override(config) {
  // Add the polyfill for 'path' here
  config.resolve.fallback = {
    ...config.resolve.fallback,
    path: require.resolve('path-browserify'),
  };

  return config;
};
