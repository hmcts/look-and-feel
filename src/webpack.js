const webpack = require('webpack');
const scss = require('./webpack/rules/scss');
const browserSupport = require('./webpack/rules/browserSupport');
const govukTemplate = require('./sources/govukTemplate');
const govukElements = require('./sources/govukElements');
const govukToolkit = require('./sources/govukToolkit');
const path = require('path');

const isDefined = obj => typeof obj !== 'undefined';
const defaultIfUndefined = (obj, _default) => {
  if (isDefined(obj)) {
    return obj;
  }
  return _default;
};

const webpackSettings = (assetPath, settings) => {
  const _scss = scss(assetPath);
  const userModules = defaultIfUndefined(settings.module, {});
  const userRules = defaultIfUndefined(userModules.rules, []);
  const userResolve = defaultIfUndefined(settings.resolve, {});
  const userAliases = defaultIfUndefined(userResolve.alias, {});
  const userPlugins = defaultIfUndefined(settings.plugins, []);
  const userOutput = defaultIfUndefined(settings.output, {});

  const defaults = {
    plugins: [
      ..._scss.plugins,
      ...govukTemplate.plugins,
      ...govukToolkit.plugins
    ],
    output: {
      path: path.resolve('./dist'),
      filename: '[name].js'
    },
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
    output: Object.assign({}, defaults.output, userOutput),
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

const configureWebpack = (app, baseUrl, settings) => {
  const assetPath = app.get('assetPath');
  const _webpackSettings = webpackSettings(assetPath, settings);
  const _webpack = webpack(_webpackSettings);

  app.set('webpackSettings', _webpackSettings);
  app.set('webpack', _webpack);

  return app;
};

module.exports = { configureWebpack };
