const url = require('url');
const deepmerge = require('deepmerge');
const webpackDev = require('webpack-dev-middleware');
const webpack = require('webpack');
const isDev = require('./util/isDev');

const scss = require('./webpack/rules/scss');
const browserSupport = require('./webpack/rules/browserSupport');
const govukTemplate = require('./sources/govukTemplate');
const govukElements = require('./sources/govukElements');
const govukToolkit = require('./sources/govukToolkit');

const assetPath = baseUrl => url.resolve(baseUrl, 'assets/');

const isDefined = (obj) => typeof obj !== 'undefined';

const webpackSettings = (_assetPath, settings) => {
  const _scss = scss(_assetPath);
  const userModules = isDefined(settings.module) ? settings.module : {};
  const userRules = isDefined(userModules.rules) ? userModule.rules : [];
  const userResolve = isDefined(settings.resolve) ? settings.resolve : {};
  const userAliases = isDefined(userResolve.alias) ? userResolve.alias : {};
  const userPlugins = isDefined(settings.plugins) ? settings.plugins : [];

  const defaults = {
    plugins: [
      ..._scss.plugins,
      ...govukTemplate.plugins,
      ...govukToolkit.plugins
    ],
    output: { filename: '[name].js' },
    module: {
      rules: [
        ...browserSupport,
        ...govukToolkit.rules,
        ..._scss.rules
      ]
    },
    resolve: {
      alias: Object.assign(
        {},
        govukElements.alias,
        govukToolkit.alias
      )
    },
    devtool: 'source-map'
  };
  const manualMerged = {
    plugins: [...defaults.plugins, ...userPlugins],
    module: Object.assign({}, defaults.module, settings.module, {
      rules: [
        ...defaults.module.rules,
        ...userRules
      ]
    }),
    resolve: {
      alias: Object.assign({}, defaults.resolve.alias, userAliases)
    }
  };
  return Object.assign({}, defaults, settings, manualMerged);
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
