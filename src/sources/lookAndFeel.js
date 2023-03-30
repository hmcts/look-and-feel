const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const root = path.resolve(__dirname, './../../');
const templates = path.resolve(root, './templates');
const oldTemplates = path.resolve(root, './templates/look-and-feel');
const sass = path.resolve(root, './assets/scss');
const images = path.resolve(root, './assets/images');

const copyLookAndFeelAssets = {
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: images, to: 'images' }
      ],
    }),
  ],
};

module.exports = {
  paths: { root, templates, sass },
  plugins: [ copyLookAndFeelAssets ],
  backwardsCompatibility: { templates: oldTemplates }
};
