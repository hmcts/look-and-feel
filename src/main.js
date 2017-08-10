const nunjucks = require('express-nunjucks');
const { configureViews } = require('./views');

const expressDefaults = {
  views: []
};

const configure = (app, {
  express = expressDefaults
} = {}) => {
  configureViews(app, express.views);
  nunjucks(app);
  return app;
};

module.exports = {
  configure
};
