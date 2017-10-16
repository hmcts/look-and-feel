const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const packageJson = require.resolve('govuk_frontend_toolkit/package.json');
const root = path.resolve(packageJson, '..');
const sass = path.resolve(root, 'stylesheets');
const images = path.resolve(root, 'images');
const javascripts = path.resolve(root, 'javascripts');

const copyGovukToolkitAssets = new CopyWebpackPlugin(
  [{ from: images, to: 'images' }]
);

const alias = { govuk: path.resolve(javascripts, 'govuk') };

const govukModule = (file, expose, imports = ['window.jQuery=jquery']) => {
  const importsArr = Array.isArray(imports) ? imports : [imports];

  return {
    test: path.resolve(javascripts, file),
    use: [
      `imports-loader?${importsArr.join(',')}`,
      `exports-loader?window.GOVUK.${expose}`
    ]
  };
};

const rules = [
  govukModule(
    'govuk/shim-links-with-button-role.js',
    'shimLinksWithButtonRole'
  ),
  govukModule('govuk/show-hide-content.js', 'ShowHideContent'),
  govukModule('govuk/stop-scrolling-at-footer.js', 'stopScrollingAtFooter'),
  govukModule(
    'govuk/stick-at-top-when-scrolling.js',
    'stickAtTopWhenScrolling', [
      'window.jQuery=jquery',
      'window.GOVUK.stopScrollingAtFooter=govuk/stop-scrolling-at-footer'
    ]
  )
];

module.exports = {
  paths: { root, sass },
  plugins: [ copyGovukToolkitAssets ],
  alias,
  rules
};
