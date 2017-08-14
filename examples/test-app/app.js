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

app.get('/typography', (req, res) => {
  res.render('Typography');
});

app.listen(config.port);
