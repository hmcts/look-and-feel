const path = require('path');

const root = path.resolve(__dirname, './../../');
const templates = path.resolve(root, './templates');
const oldTemplates = path.resolve(root, './templates/look-and-feel');

module.exports = {
  paths: { root, templates },
  backwardsCompatibility: { templates: oldTemplates }
};
