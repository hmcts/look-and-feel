const path = require('path');

const packageJson = require.resolve('govuk-elements-sass/package.json');
const root = path.resolve(packageJson, '..');
const sass = path.resolve(root, 'public/sass');

module.exports = { paths: { root, sass } };
