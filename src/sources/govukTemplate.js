const path = require('path');

//Walk the tree to get back to the root of the module
const root = path.resolve(require.resolve('govuk_template_jinja'), '../../../');

const templates = path.resolve(root, 'views/layouts');
const assets = path.resolve(root, 'assets');
const images = path.resolve(root, 'assets/images');
const javascripts = path.resolve(root, 'assets/javascripts');
const stylesheets = path.resolve(root, 'assets/stylesheets');


module.exports = {
  paths: { root, templates, assets, images, javascripts, stylesheets }
};
