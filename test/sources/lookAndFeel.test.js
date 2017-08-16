const { expect } = require('./../util/chai');
const lookAndFeel = require('./../../src/sources/lookAndFeel');

describe('sources/lookAndFeel', () => {
  describe('.paths', () => {
    it('.root => path to the module root', () => {
      expect(lookAndFeel.paths.root)
        .to.be.a.directory()
        .and.include.contents(['package.json']);
    });
    it('.templates => path to the templates directory', () => {
      expect(lookAndFeel.paths.templates)
        .to.be.a.directory()
        .and.include.contents(['look-and-feel']);
    });
  });
  describe('.backwardsCompatibility', () => {
    it('.templates => path to the templates directory', () => {
      expect(lookAndFeel.backwardsCompatibility.templates)
        .to.be.a.directory()
        .and.include.contents(['layouts', 'components']);
    });
  });
});
