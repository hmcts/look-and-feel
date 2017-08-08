const { configureViews } = require('./views');
const { configureNunjucks } = require('./nunjucks');

const expressDefaults = {
  views: []
};

const configure = (app, {
  express = expressDefaults
  nunjucks = {}
} = {}) => {
  configureViews(app, express.views);
  configureNunjucks(app, nunjucks);

  return app;
};

module.exports = {
  configure
};
