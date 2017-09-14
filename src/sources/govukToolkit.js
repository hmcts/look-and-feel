const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const packageJson = require.resolve('govuk_frontend_toolkit/package.json');
const root = path.resolve(packageJson, '..');
const sass = path.resolve(root, 'stylesheets');
const images = path.resolve(root, 'images');
const javascripts = path.resolve(root, 'javascripts');

const copyGovukToolkitAssets = new CopyWebpackPlugin([
  { from: images, to: 'images' },
  { from: javascripts, to: 'javascripts' }
]);

module.exports = {
  paths: { root, sass },
  copyGovukToolkitAssets
};
