const isDev = require('./util/isDev');
const webpackDev = require('webpack-dev-middleware');

const setupDevMiddleware = (app, settings) => {
  const _webpack = app.get('webpack');

  const defaultSettings = { publicPath: '/assets/' };

  app.use(webpackDev(_webpack, Object.assign(defaultSettings, settings)));
};

const configureDevelopment = (app, {
  useWebpackDevMiddleware = false,
  webpackDevMiddleware
} = {}) => {
  if (isDev() || useWebpackDevMiddleware) {
    setupDevMiddleware(app, webpackDevMiddleware);
  }
};

module.exports = { configureDevelopment };
