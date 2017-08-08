const govukTemplate = require('./sources/govukTemplate');
const patterns = require('./sources/patterns');

const ensureArray = (maybeArray) => {
  if (typeof maybeArray === 'string') return [maybeArray];
  return maybeArray;
};

const configureViews = (app, extraViews) => {
  const userViews = ensureArray(extraViews);
  const existingViews = ensureArray(app.get('views'));

  return app.set('views', [
    govukTemplate.paths.templates,
    patterns.paths.templates,
    ...userViews,
    ...existingViews
  ]);
};

module.exports = { configureViews };
