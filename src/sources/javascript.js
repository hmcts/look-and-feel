const CopyWebpackPlugin = require('copy-webpack-plugin');

const extractJSFiles = (files) => {
    return files.filter( file => file.endsWith('.js') )
};

const assetPathOnwards = (files) => {
    return files.map( file => file.substring(file.search('assets')))
};

const createFromToStructure = (jsFiles) => {
    return jsFiles.map( file => ({ from: file, to: 'javascripts' }) );
};

const copyJavaScriptToWebpack = (files) => {
    const jsFiles = extractJSFiles(files);
    const jsFilesAssetPath = assetPathOnwards(jsFiles);
    const fromToStructure = createFromToStructure(jsFilesAssetPath);
    return { plugins: [new CopyWebpackPlugin( fromToStructure )] };
};

module.exports = {
    extractJSFiles,
    assetPathOnwards,
    createFromToStructure,
    copyJavaScriptToWebpack,
};
