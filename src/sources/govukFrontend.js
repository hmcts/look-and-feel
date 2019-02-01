const path = require('path');

const packageJson = require.resolve('govuk-frontend/package.json');
const root = path.resolve(packageJson, '..');
const components = path.resolve(root, 'components');

module.exports = { paths: { templates: root, components, sass: root, javascript: root } };
