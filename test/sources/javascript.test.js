const { expect } = require('./../util/chai');
const {
  extractJSFiles,
  assetPathOnwards,
  createFromToStructure,
  copyJavaScriptToWebpack
} = require('./../../src/sources/javascript');

describe('sources/javascript', () => {
  const files = [
    'app/assets/scss/main.scss',
    'app/assets/scss/style.scss',
    'app/assets/scss/style2.scss',
    'app/assets/js/myJSFile.js',
    'app/assets/javascript/myJSFile2.js'
  ];

  it('should extract all .js files', () => {
    const jsFiles = extractJSFiles(files);
    expect(jsFiles[0]).to.equal('app/assets/js/myJSFile.js');
    expect(jsFiles[1]).to.equal('app/assets/javascript/myJSFile2.js');
    expect(jsFiles).to.have.length(2);
  });

  it('should strip out the path before \'../asset\'', () => {
    const assetPath = assetPathOnwards(extractJSFiles(files));
    expect(assetPath[0]).to.equal('assets/js/myJSFile.js');
    expect(assetPath[1]).to.equal('assets/javascript/myJSFile2.js');
    expect(assetPath).to.have.length(2);
  });

  it('should create a \'from\' \'to\' structure', () => {
    const fromToStructure = createFromToStructure(
      assetPathOnwards(extractJSFiles(files))
    );
    expect(fromToStructure[0]).to.eql(
      { from: 'assets/js/myJSFile.js', to: 'javascripts' }
    );
    expect(fromToStructure[1]).to.eql(
      { from: 'assets/javascript/myJSFile2.js', to: 'javascripts' }
    );
    expect(fromToStructure).to.have.length(2);
  });

  describe('#copyJavaScriptToWebpack', () => {
    it('returns an object containing an apply function', () => {
      const copyWebpackPlugin = copyJavaScriptToWebpack(files);
      expect(copyWebpackPlugin.plugins[0]).to.be.an('object');
      expect(copyWebpackPlugin.plugins[0].apply).to.be.a('function');
    });
  });
});
