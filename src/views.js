const path = require('path');

const patternsTemplateDir = () => {
  return path.resolve(__dirname, '../templates');
};

const govukTemplateDir = () => {
  // GOV.UK points to it's HTML template directly
  // Nunjucks expects a directory so we need to step up a level
  return path.resolve(require.resolve('govuk_template_jinja'), '../');
};

const ensureArray = (maybeArray) => {
  if (typeof maybeArray === 'string') return [maybeArray];
  return maybeArray;
};

const configureViews = (app, extraViews) => {
  const govukViews = [
    govukTemplateDir(),
    patternsTemplateDir()
  ];
  const userViews = ensureArray(extraViews);
  const existingViews = ensureArray(app.get('views'));

  return app.set('views', [
    ...govukViews,
    ...userViews,
    ...existingViews
  ]);
};

module.exports = { configureViews };
