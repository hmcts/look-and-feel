const express = require('express');
const path = require('path');
const config = require('config');
const lookAndFeel = require('@hmcts/look-and-feel');

const app = express();

lookAndFeel.configure(app, {
  baseUrl: `http://localhost:${config.port}`,
  express: { views: ['views'] },
  webpack: { entry: [path.resolve(__dirname, './assets/scss/main.scss')] }
});

app.get('/', (req, res) => {
  res.render('Start', {
    title: 'Apply for Divorce',
    phase: 'ALPHA',
    feedbackLink: 'https://github.com/hmcts/look-and-feel/issues/new'
  });
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

app.listen(config.port);
