const { expect } = require('./util/chai');
const lookAndFeel = require('../src/main');
const express = require('express');

describe('@hmcts/look-and-feel', () => {
  describe('.configure()', () => {
    it('throws if baseUrl is not defined', () => {
      const app = express();
      expect(() => lookAndFeel.configure(app)).to.throw(Error, /baseUrl/);
    });
  });
});
