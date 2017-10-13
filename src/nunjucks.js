const nunjucks = require('express-nunjucks');
const isDev = require('./util/isDev');

const nunjucksDefaults = {
  watch: isDev(),
  noCache: isDev(),
  throwOnUndefined: true,
  globals: {
    isArray(value) {
      return Array.isArray(value);
    }
  }
};

const configureNunjucks = (app, settings) => {
  nunjucks(app, Object.assign({}, nunjucksDefaults, settings));
  return app;
};

module.exports = { configureNunjucks };
