const webpack = require('webpack');
const scss = require('./webpack/rules/scss');
const browserSupport = require('./webpack/rules/browserSupport');
const lookAndFeel = require('./sources/lookAndFeel');
const path = require('path');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

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
  const userPlugins = defaultIfUndefined(settings.plugins, []);
  const userOutput = defaultIfUndefined(settings.output, {});

  const defaults = {
    plugins: [
      new HardSourceWebpackPlugin({ info: { level: 'warn' } }),
      ..._scss.plugins,
      ...lookAndFeel.plugins
    ],
    output: {
      path: path.resolve('./dist'),
      filename: '[name].js'
    },
    externals: [{ window: 'window' }],
    module: {
      rules: [
        ...browserSupport,
        ..._scss.rules
      ]
    }
  };
  const manualMerged = {
    plugins: [...defaults.plugins, ...userPlugins],
    output: Object.assign({}, defaults.output, userOutput),
    module: Object.assign({}, defaults.module, settings.module, {
      rules: [
        ...defaults.module.rules,
        ...userRules
      ]
    })
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
