const url = require('url');
const webpackDev = require('webpack-dev-middleware');
const webpack = require('webpack');
const isDev = require('./util/isDev');

const scss = require('./webpack/rules/scss');
const govukTemplate = require('./sources/govukTemplate');
const govukElements = require('./sources/govukElements');
const govukToolkit = require('./sources/govukToolkit');

const assetPath = baseUrl => url.resolve(baseUrl, 'assets/');

const webpackSettings = (_assetPath, settings) => {
  const _scss = scss(_assetPath);

  const defaults = {
    plugins: [
      _scss.extractSassIntoFiles,
      govukTemplate.copyGovukTemplateAssets,
      govukToolkit.copyGovukToolkitAssets
    ],
    module: { rules: [ _scss.scssLoader ] },
    resolve: {
      alias: Object.assign(
        {},
        govukElements.alias
      )
    }
  };
  return Object.assign({}, defaults, settings);
};

const setupDevMiddleware = (app, _assetPath, settings) => {
  const _webpack = webpack(webpackSettings(_assetPath, settings));
  app.use(webpackDev(_webpack, { publicPath: '/assets/' }));
};

const configureWebpack = (app, baseUrl, settings) => {
  app.locals.asset_path = assetPath(baseUrl);

  if (isDev()) {
    setupDevMiddleware(app, assetPath(baseUrl), settings);
  }

  return app;
};

module.exports = { configureWebpack };
