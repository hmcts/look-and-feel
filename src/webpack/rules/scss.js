const ExtractTextPlugin = require('extract-text-webpack-plugin');
const govukElements = require('../../sources/govukElements');
const govukToolkit = require('../../sources/govukToolkit');

const extractSass = new ExtractTextPlugin({ filename: '[name].css' });

const sassLoader = {
  loader: 'sass-loader',
  options: {
    includePaths: [
      govukElements.paths.sass,
      govukToolkit.paths.sass
    ]
  }
};

const scssRule = {
  test: /\.scss$/,
  use: extractSass.extract(['css-loader', sassLoader])
};

module.exports = {
  rules: [scssRule],
  plugins: [extractSass]
};
