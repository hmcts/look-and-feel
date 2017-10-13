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

const alias = { govuk: path.resolve(javascripts, 'govuk') };

const rules = [
  {
    test: path.resolve(javascripts, 'govuk/show-hide-content.js'),
    use: [
      'imports-loader?window.jQuery=jquery',
      'exports-loader?window.GOVUK.ShowHideContent'
    ]
  }
];

module.exports = {
  paths: { root, sass },
  plugins: [ copyGovukToolkitAssets ],
  alias,
  rules
};
