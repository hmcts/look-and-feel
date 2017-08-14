const path = require('path');

const packageJson = require.resolve('govuk_frontend_toolkit/package.json');
const root = path.resolve(packageJson, '..');
const sass = path.resolve(root, 'stylesheets');

module.exports = { paths: { root, sass } };
