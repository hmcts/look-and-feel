const nunjucks = require('express-nunjucks');
const isDev = require('./util/isDev');

const truthies = ['true', 'True', 'TRUE', '1', 'yes', 'Yes', 'YES', 'y', 'Y'];
const falsies = ['false', 'False', 'FALSE', '0', 'no', 'No', 'NO', 'n', 'N'];

const nunjucksDefaults = {
  watch: isDev(),
  noCache: isDev(),
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
    },
    safeId(...strings) {
      return strings
        .map(str => str.toString())
        .join('-')
        .toLowerCase()
        // replace foo[1] to foo.1
        .replace(/\[(\d{1,})\]/, '.$1')
        .replace(/[^A-Za-z0-9\s_-]/g, '')
        // replace 'foo bar' to 'foo.bar'
        .replace(/\s/g, '.');
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
