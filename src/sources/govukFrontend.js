const path = require('path');

const packageJson = require.resolve('govuk-frontend/package.json');
const root = path.resolve(packageJson, '..');
const sass = path.resolve(root, 'all.scss');
const javascript = path.resolve(root, 'all.js');

module.exports = { paths: { template: root, sass, javascript } };
