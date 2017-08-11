const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSass = new ExtractTextPlugin({
  filename: '[name].css'
});

const scssRule = {
  test: /\.scss$/,
  use: extractSass.extract(['css-loader', 'sass-loader'])
};

module.exports = {
  rules: [scssRule],
  plugins: [extractSass]
};
