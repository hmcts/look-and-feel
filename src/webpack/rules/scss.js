const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const govukFrontend = require('../../sources/govukFrontend');
const lookAndFeel = require('../../sources/lookAndFeel');

const extractSass = new MiniCssExtractPlugin({ filename: '[name].css' });

const sass = assetPath => {
  const sassLoader = {
    loader: 'sass-loader',
    options: {
      includePaths: [
        govukFrontend.paths.sass,
        lookAndFeel.paths.sass
      ],
      /* eslint-disable id-blacklist */
      data: `$path: '${assetPath}/images/';`
      /* eslint-enable id-blacklist */
    }
  };
  const scssRule = {
    test: /\.scss$/,
    use: [sassLoader, 'css-loader']
  };

  return { rules: [scssRule], plugins: [extractSass] };
};

module.exports = sass;
