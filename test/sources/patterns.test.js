const { expect } = require('./../util/chai');
const patterns = require('./../../src/sources/patterns');

describe('sources/patterns', () => {
  describe('.paths', () => {
    it('.root => path to the module root', () => {
      expect(patterns.paths.root)
        .to.be.a.directory()
        .and.include.contents(['package.json']);
    });
    it('.templates => path to the templates directory', () => {
      expect(patterns.paths.templates)
        .to.be.a.directory()
        .and.include.contents(['patterns']);
    });
  });
});

