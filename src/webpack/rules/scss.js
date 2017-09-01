const ExtractTextPlugin = require('extract-text-webpack-plugin');
const govukElements = require('../../sources/govukElements');
const govukToolkit = require('../../sources/govukToolkit');

const extractSassIntoFiles = new ExtractTextPlugin({ filename: '[name].css' });

const sass = assetPath => {
  const sassLoader = {
    loader: 'sass-loader',
    options: {
      includePaths: [
        govukElements.paths.sass,
        govukToolkit.paths.sass
      ],
      /* eslint-disable id-blacklist */
      data: `$path: '${assetPath}/images/';`
      /* eslint-enable id-blacklist */
    }
  };
  const scssLoader = {
    test: /\.scss$/,
    use: extractSassIntoFiles.extract(['css-loader', sassLoader])
  };

  return { scssLoader, extractSassIntoFiles };
};

module.exports = sass;
