const { expect } = require('./chai');
const isDev = require('./../../src/util/isDev');

const withNodeEnv = (value, block) => {
  const oldNodeEnv = process.env.NODE_ENV;
  process.env.NODE_ENV = value;

  const returnVal = block();

  process.env.NODE_ENV = oldNodeEnv;
  return returnVal;
};

describe('util/isDev', () => {
  describe('.isDev()', () => {
    it('returns true if NODE_ENV is development', () => {
      withNodeEnv('development', () => expect(isDev()).to.be.true);
    });
    it('returns true if NODE_ENV is not development', () => {
      withNodeEnv('production', () => expect(isDev()).to.be.false);
      withNodeEnv('testing', () => expect(isDev()).to.be.false);
      withNodeEnv('test', () => expect(isDev()).to.be.false);
      withNodeEnv('dev', () => expect(isDev()).to.be.false);
      withNodeEnv('', () => expect(isDev()).to.be.false);
      withNodeEnv(undefined, () => expect(isDev()).to.be.false);
      withNodeEnv(0, () => expect(isDev()).to.be.false);
      withNodeEnv({}, () => expect(isDev()).to.be.false);
    });
  });
});
