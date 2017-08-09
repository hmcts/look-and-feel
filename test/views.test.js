const { expect } = require('./util/chai');
const views = require('../src/views');
const express = require('express');
const path = require('path');

const testApp = () => {
  return express();
};

describe('views', () => {
  describe('.configureViews()', () => {
    {
      const app = testApp();
      views.configureViews(app, []);

      it('sets app.views', () => {
        expect(app.get('views')).to.be.an('array');
      });
      it('adds this modules views to app.views', () => {
        const viewsPath = path.resolve(__dirname, '../templates');
        expect(app.get('views')).to.contain(viewsPath);
      });
      it('adds the govuk template to app.views', () => {
        expect(app.get('views')).to.contain.match(/govuk_template_jinja/);
      });
    }

    it('maintains any views already set', () => {
      const myViewsFolder = '/my/views/folder';
      const app = testApp();
      app.set('views', [myViewsFolder]);
      views.configureViews(app, []);

      expect(app.get('views')).to.contain(myViewsFolder);
    });

    it('allows users to explicitly set views folders', () => {
      const myViewsFolder = '/my/views/folder';
      const app = testApp();
      views.configureViews(app, [myViewsFolder]);

      expect(app.get('views')).to.contain(myViewsFolder);
    });
  });
});
