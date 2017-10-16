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
  const exposeArr = Array.isArray(expose) ? expose : [expose];

  return {
    test: path.resolve(javascripts, file),
    use: [
      `imports-loader?${importsArr.join(',')}`,
      `exports-loader?${exposeArr.join(',')}`
    ]
  };
};

const rules = [
  govukModule(
    'govuk/analytics/analytics.js',
    'window.GOVUK.Analytics', [
      'window.jQuery=jquery',
      'window.GOVUK.GOVUKTracker=govuk/analytics/govuk-tracker.js',
      'window.GOVUK.GoogleAnalyticsUniversalTracker=govuk/analytics/google-analytics-universal-tracker.js'
    ]
  ),
  govukModule(
    'govuk/analytics/download-link-tracker.js',
    'window.GOVUK.analyticsPlugins.downloadLinkTracker'
  ),
  govukModule(
    'govuk/analytics/govuk-tracker.js',
    'window.GOVUK.GOVUKTracker'
  ),
  govukModule(
    'govuk/analytics/google-analytics-universal-tracker.js',
    'window.GOVUK.GoogleAnalyticsUniversalTracker'
  ),
  govukModule(
    'govuk/details.polyfill.js',
    'window.GOVUK.details'
  ),
  govukModule('govuk/modules.js', [
    'window.GOVUK.Modules',
    'start=window.GOVUK.modules.start'
  ]),
  govukModule('govuk/primary-links', [
    'PrimaryList=window.GOVUK.PrimaryList',
    'window.GOVUK.primaryLinks'
  ]),
  govukModule(
    'govuk/shim-links-with-button-role.js',
    'window.GOVUK.shimLinksWithButtonRole'
  ),
  govukModule(
    'govuk/show-hide-content.js',
    'window.GOVUK.ShowHideContent'
  ),
  govukModule(
    'govuk/stop-scrolling-at-footer.js',
    'window.GOVUK.stopScrollingAtFooter'
  ),
  govukModule(
    'govuk/stick-at-top-when-scrolling.js',
    'window.GOVUK.stickAtTopWhenScrolling', [
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
