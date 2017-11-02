const path = require('path');

const root = path.resolve(__dirname, './../../');
const templates = path.resolve(root, './templates');
const oldTemplates = path.resolve(root, './templates/look-and-feel');
const sass = path.resolve(root, './assets/scss');

module.exports = {
  paths: { root, templates, sass },
  backwardsCompatibility: { templates: oldTemplates }
};
