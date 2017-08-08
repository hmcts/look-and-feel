const { configureViews } = require('./views');
const { configureNunjucks } = require('./nunjucks');
const { configureWebpack } = require('./webpack');
const { assigned } = require('check-types');

const expressDefaults = {
  views: []
};

const configure = (app, {
  baseUrl,
  express = expressDefaults,
  nunjucks = {},
  webpack = {}
} = {}) => {
  if(!assigned(baseUrl)) throw Error('baseUrl not defined');

  configureViews(app, express.views);
  configureNunjucks(app, nunjucks);
  configureWebpack(app, baseUrl, webpack);

  return app;
};

module.exports = {
  configure
};
