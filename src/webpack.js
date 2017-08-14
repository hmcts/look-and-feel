const url = require('url');
const webpackDev = require('webpack-dev-middleware');
const webpack = require('webpack');
const isDev = require('./util/isDev');

const scss = require('./webpack/rules/scss');
const govukTemplate = require('./sources/govukTemplate');

const assetPath = baseUrl => url.resolve(baseUrl, 'assets/');

const webpackSettings = settings => {
  const defaults = {
    plugins: [
      ...scss.plugins,
      ...govukTemplate.plugins
    ],
    module: { rules: [...scss.rules] }
  };
  return Object.assign({}, defaults, settings);
};

const setupDevMiddleware = (app, settings) => {
  const _webpack = webpack(webpackSettings(settings));
  app.use(webpackDev(_webpack, { publicPath: '/assets/' }));
};

const configureWebpack = (app, baseUrl, settings) => {
  app.locals.asset_path = assetPath(baseUrl);

  if (isDev()) {
    setupDevMiddleware(app, settings);
  }

  return app;
};

module.exports = { configureWebpack };
