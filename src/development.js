const isDev = require('./util/isDev');
const webpackDev = require('webpack-dev-middleware');
const log = require('./util/logging')('development');

const setupDevMiddleware = (app, settings) => {
  const _webpack = app.get('webpack');

  const defaultSettings = {
    publicPath: '/assets/',
    logLevel: 'warn'
  };

  app.use(webpackDev(_webpack, Object.assign(defaultSettings, settings)));
};

const configureDevelopment = (app, {
  useWebpackDevMiddleware = false,
  webpackDevMiddleware
} = {}) => {
  if (useWebpackDevMiddleware && !isDev()) {
    log.warn('useWebpackDevMiddleware is deprecated');
  }
  if (isDev()) {
    log.debug('Using webpack dev middleware to serve assets');
    setupDevMiddleware(app, webpackDevMiddleware);
  }
};

module.exports = { configureDevelopment };
