const path = require('path');

const root = path.resolve(__dirname, './../../');
const templates = path.resolve(root, './templates');

module.exports = { paths: { root, templates } };