const govukFrontend = require('./sources/govukFrontend');
const lookAndFeel = require('./sources/lookAndFeel');

const ensureArray = maybeArray => {
  if (typeof maybeArray === 'string') return [maybeArray];
  return maybeArray;
};

const configureViews = (app, extraViews) => {
  const userViews = ensureArray(extraViews);
  const existingViews = ensureArray(app.get('views'));

  return app.set('views', [
    govukFrontend.paths.template,
    govukFrontend.paths.components,
    lookAndFeel.paths.templates,
    lookAndFeel.backwardsCompatibility.templates,
    ...userViews,
    ...existingViews
  ]);
};

module.exports = { configureViews };
