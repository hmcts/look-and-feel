const chai = require('chai');

const expect = chai.expect;

const chaiFs = require('chai-fs');

chai.use(chaiFs);

module.exports = { expect };
