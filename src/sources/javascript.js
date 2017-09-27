const CopyWebpackPlugin = require('copy-webpack-plugin');

const extractJSFiles = files => files.filter(file => file.endsWith('.js'));

const assetPathOnwards = files => {
  const insideAssets = file => file.substring(file.search('assets'));
  return files.map(insideAssets);
};

const createFromToStructure = jsFiles => jsFiles.map(file => {
  return { from: file, to: 'javascripts' };
});

const copyJavaScriptToWebpack = files => {
  const jsFiles = extractJSFiles(files);
  const jsFilesAssetPath = assetPathOnwards(jsFiles);
  const fromToStructure = createFromToStructure(jsFilesAssetPath);
  return { plugins: [new CopyWebpackPlugin(fromToStructure)] };
};

module.exports = {
  extractJSFiles,
  assetPathOnwards,
  createFromToStructure,
  copyJavaScriptToWebpack
};
