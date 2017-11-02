const ExtractTextPlugin = require('extract-text-webpack-plugin');
const govukElements = require('../../sources/govukElements');
const govukToolkit = require('../../sources/govukToolkit');
const lookAndFeel = require('../../sources/lookAndFeel');

const extractSass = new ExtractTextPlugin({ filename: '[name].css' });

const sass = assetPath => {
  const sassLoader = {
    loader: 'sass-loader',
    options: {
      includePaths: [
        govukElements.paths.sass,
        govukToolkit.paths.sass,
        lookAndFeel.paths.sass
      ],
      /* eslint-disable id-blacklist */
      data: `$path: '${assetPath}/images/';`
      /* eslint-enable id-blacklist */
    }
  };
  const scssRule = {
    test: /\.scss$/,
    use: extractSass.extract(['css-loader', sassLoader])
  };

  return { rules: [scssRule], plugins: [extractSass] };
};

module.exports = sass;
