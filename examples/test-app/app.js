const express = require('express');
const path = require('path');
const lookAndFeel = require('@hmcts/look-and-feel');

const app = express();

lookAndFeel.configure(app, {
  baseUrl: 'http://localhost:3000',
  express: { views: ['views'] },
  webpack: {
    entry: [
      path.resolve(__dirname, './assets/scss/main.scss')
    ]
  }
});

app.get('/hello-world', (req, res) => {
  res.render('HelloWorld');
});

app.listen(3000);
