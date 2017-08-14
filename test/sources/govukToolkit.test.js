const { expect } = require('./../util/chai');
const govukToolkit = require('./../../src/sources/govukToolkit');

describe('sources/govukToolkit', () => {
  describe('.paths', () => {
    it('.root => path to the module root', () => {
      expect(govukToolkit.paths.root)
        .to.be.a.directory()
        .and.include.contents(['package.json']);
    });
    it('.sass => path to the sass files', () => {
      expect(govukToolkit.paths.sass)
        .to.be.a.directory()
        .and.include.contents(['_colours.scss']);
    });
  });
});
