const { expect } = require('./../util/chai');
const govukElements = require('./../../src/sources/govukElements');

describe('sources/govukElements', () => {
  describe('.paths', () => {
    it('.root => path to the module root', () => {
      expect(govukElements.paths.root)
        .to.be.a.directory()
        .and.include.contents(['package.json']);
    });
    it('.sass => path to the sass files', () => {
      expect(govukElements.paths.sass)
        .to.be.a.directory()
        .and.include.contents([
          '_elements.scss',
          '_frontend-toolkit.scss',
          '_govuk-elements.scss'
        ]);
    });
  });
});
