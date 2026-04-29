const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const packageJson = require.resolve('govuk-frontend/package.json');
const root = path.resolve(packageJson, '..');
const govukRoot = path.resolve(root, 'govuk');
const sass = path.resolve(root, './assets/scss');
const javascript = path.resolve(root, 'all.js');
const components = path.resolve(root, 'components');
const assets = path.resolve(govukRoot, 'assets');
const images = path.resolve(assets, 'images');
const fonts = path.resolve(assets, 'fonts');

const copyGovukTemplateAssets = new CopyWebpackPlugin({
  patterns: [
    { from: images, to: 'images' },
    { from: fonts, to: 'fonts' }
  ]
});

module.exports = {
  paths: { template: root, components, sass, javascript, assets },
  plugins: [copyGovukTemplateAssets]
};