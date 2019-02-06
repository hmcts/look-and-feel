const path = require('path');

const packageJson = require.resolve('govuk-frontend/package.json');
const root = path.resolve(packageJson, '..');
const sass = path.resolve(root, 'all.scss');
const javascript = path.resolve(root, 'all.js');
const components = path.resolve(root, 'components');

module.exports = { paths: { template: root, components, sass, javascript } };
