const nunjucks = require('express-nunjucks');
const isDev = require('./util/isDev');

const truthies = ['true', 'True', 'TRUE', '1', 'yes', 'Yes', 'YES', 'y', 'Y'];
const falsies = ['false', 'False', 'FALSE', '0', 'no', 'No', 'NO', 'n', 'N'];

const nunjucksDefaults = {
  watch: isDev(),
  noCache: isDev(),
  throwOnUndefined: true,
  globals: {
    isArray(value) {
      return Array.isArray(value);
    },
    parseBool(value) {
      if (truthies.includes(value)) {
        return true;
      }
      if (falsies.includes(value)) {
        return false;
      }
      return value;
    },
    isBoolean(value) {
      return typeof value === 'boolean';
    }
  }
};

const configureNunjucks = (app, settings) => {
  app.locals.asset_path = app.get('assetPath');

  const globals = Object.assign({}, nunjucksDefaults.globals, settings.globals);
  nunjucks(app, Object.assign({}, nunjucksDefaults, settings, { globals }));
  return app;
};

module.exports = { configureNunjucks };
