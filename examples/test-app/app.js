const express = require('express');
const path = require('path');
const config = require('config');
const lookAndFeel = require('@hmcts/look-and-feel');

const app = express();

lookAndFeel.configure(app, {
  baseUrl: `http://localhost:${config.port}`,
  express: { views: ['views'] },
  webpack: {
    devtool: 'source-map',
    entry: {
      main: path.resolve('./assets/scss/main.scss'),
      'selection-buttons': path.resolve('./assets/js/selection-buttons.js')
    }
  }
});

app.get('/', (req, res) => {
  res.render('Start', {
    title: 'Apply for Divorce',
    phase: 'ALPHA',
    feedbackLink: 'https://github.com/hmcts/look-and-feel/issues/new'
  });
});

app.get('/selection-buttons', (req, res) => {
  res.render('SelectionButtons');
});

app.get('/typography', (req, res) => {
  res.render('Typography');
});

app.get('/question', (req, res) => {
  res.render('Question', {
    url: '/localhost',
    phase: 'ALPHA',
    feedbackLink: 'https://github.com/hmcts/look-and-feel/issues/new',
    fields: {
      firstName: { id: 'firstName', name: 'firstName', value: 'Michael' },
      lastName: { id: 'lastName', name: 'lastName', value: 'Allen' }
    }
  });
});

app.get('/javascript', (req, res) => {
  res.render('JavaScript');
});

app.listen(config.port);
