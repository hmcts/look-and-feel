const { expect } = require('./../util/chai');
const nunjucks = require('nunjucks');

const selectionButtons = `
{% from "templates/look-and-feel/components/fields.njk" import selectionButtons %}
{{ selectionButtons(field, question, options, hint, hideQuestion, inline, type, groupClass)}}
`;

const selectionButton = `
{% from "templates/look-and-feel/components/fields.njk" import selectionButton %}
{{ selectionButton(field, option[], type)}}
`;

const responseOptions = `
{% set responseOptions = [
  { label: 'label1', value: 'val1', description: 'desc1' },
  { label: 'label2', value: 'val2', description: 'desc2' }
] %}
`;

describe('Selection buttons headings should render as expected', () => {
  it('rendered correctly when all fields are passed', () => {
    const input = {
      field: { name: 'name', id: 'testId', value: 'value' },
      question: 'Question test',
      hint: 'Hint test',
      options: {},
      hideQuestion: false,
      inline: true,
      type: 'radio',
      groupClass: 'testGroupClass'
    };

    const res = nunjucks.renderString(selectionButtons, input);
    expect(res).to.contain('<div class="govuk-form-group  testGroupClass">');
    expect(res).to.contain('<fieldset class="govuk-fieldset" id="testId">');
    expect(res).to.contain('<legend class="govuk-fieldset__legend govuk-fieldset__legend--m ">Question test</legend>');
    expect(res).to.contain('<span id="testId-hint" class="govuk-hint">');
    expect(res).to.contain('Hint test');
    expect(res).to.contain('<div class="govuk-radios govuk-radios--inline">');
  });

  it('renders with values changed and hint omitted', () => {
    const input = {
      field: { name: 'name', id: 'testId', value: 'value' },
      question: 'Question test',
      options: {},
      hideQuestion: true,
      inline: false,
      type: 'radio',
      groupClass: 'testGroupClass'
    };

    const res = nunjucks.renderString(selectionButtons, input);
    expect(res).to.contain('<div class="govuk-form-group  testGroupClass">');
    expect(res).to.contain('<fieldset class="govuk-fieldset" id="testId">');
    expect(res).to.not.contain('<legend class="govuk-fieldset__legend govuk-fieldset__legend--m ">Question test</legend>');
    expect(res).to.contain('<legend class="govuk-fieldset__legend govuk-fieldset__legend--m visually-hidden">Question test</legend>');
    expect(res).to.not.contain('<span id="testId-hint" class="govuk-hint">');
    expect(res).to.contain('<div class="govuk-radios ">');
  });

  it('checkbox type renders', () => {
    const input = {
      field: { name: 'name', id: 'testId', value: 'value' },
      question: 'Question test',
      hint: 'Hint test',
      options: {},
      hideQuestion: false,
      inline: false,
      type: 'checkbox',
      groupClass: 'testGroupClass'
    };

    const res = nunjucks.renderString(selectionButtons, input);
    expect(res).to.contain('<div class="govuk-form-group  testGroupClass">');
    expect(res).to.contain('<fieldset class="govuk-fieldset" id="testId">');
    expect(res).to.contain('<legend class="govuk-fieldset__legend govuk-fieldset__legend--m ">Question test</legend>');
    expect(res).to.contain('<span id="testId-hint" class="govuk-hint">');
    expect(res).to.contain('Hint test');
    expect(res).to.contain('class="govuk-checkboxes');
  });
});


describe('Selection button headings should render as expected', () => {
  it('rendered correctly when all fields are passed', () => {
    const input = {
      field: { name: 'name', id: 'testId', value: 'something' },
      option: responseOptions,
      type: 'radio'
    };

    //const res = nunjucks.renderString(selectionButton, input);

    //Add some tests here as the above results in a Template render error currently
  });
});