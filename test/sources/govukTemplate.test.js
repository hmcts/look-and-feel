const { expect } = require('./../util/chai');
const govukTemplate = require('./../../src/sources/govukTemplate');

describe('sources/govukTemplate', () => {
  describe('.paths', () => {
    it('.root => path to the module root', () => {
      expect(govukTemplate.paths.root)
        .to.be.a.directory()
        .and.include.contents(['package.json']);
    });
    it('.templates => path to the templates directory', () => {
      expect(govukTemplate.paths.templates)
        .to.be.a.directory()
        .and.include.contents(['layouts']);
    });
    it('.assets => path to the assets directory', () => {
      expect(govukTemplate.paths.assets)
        .to.be.a.directory()
        .and.include.contents(['javascripts', 'stylesheets', 'images']);
    });
    it('.images => path to the images directory', () => {
      expect(govukTemplate.paths.images)
        .to.be.a.directory()
        .and.include.contents(['favicon.ico']);
    });
    it('.stylesheets => path to the stylesheets directory', () => {
      expect(govukTemplate.paths.stylesheets)
        .to.be.a.directory()
        .and.include.contents(['govuk-template.css']);
    });
    it('.javascripts => path to the javascripts directory', () => {
      expect(govukTemplate.paths.javascripts)
        .to.be.a.directory()
        .and.include.contents(['govuk-template.js']);
    });
  });
});
