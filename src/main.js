const { configureViews } = require('./views');
const { configureNunjucks } = require('./nunjucks');
const { configureWebpack } = require('./webpack');
const { configureDevelopment } = require('./development');
const { assigned } = require('check-types');
const url = require('url');

const expressDefaults = { views: [] };

const configure = (app, {
  baseUrl,
  express = expressDefaults,
  nunjucks = {},
  webpack = {},
  development = {}
} = {}) => {
  if (!assigned(baseUrl)) throw Error('baseUrl not defined');

  app.set('assetPath', url.resolve(baseUrl, 'assets/'));

  configureViews(app, express.views);
  configureNunjucks(app, nunjucks);
  configureWebpack(app, baseUrl, webpack);
  configureDevelopment(app, development);

  return app;
};

module.exports = { configure };
