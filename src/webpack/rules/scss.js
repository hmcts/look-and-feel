const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const govukFrontend = require('../../sources/govukFrontend');
const lookAndFeel = require('../../sources/lookAndFeel');

const extractSass = new MiniCssExtractPlugin({
  filename: '[name].css'
});

const sass = assetPath => {
  const scssRule = {
    test: /\.scss$/,
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          url: false
        }
      },
      {
        loader: 'sass-loader',
        options: {
          sassOptions: {
            includePaths: [
              govukFrontend.paths.sass,
              lookAndFeel.paths.sass
            ]
          },
          additionalData: `$path: '${assetPath}/images/';`
        }
      }
    ]
  };

  return {
    rules: [scssRule],
    plugins: [extractSass]
  };
};

module.exports = sass;