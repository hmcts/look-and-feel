const express = require('express');
const lookAndFeel = require('@hmcts/look-and-feel');

const app = express();

lookAndFeel.configure(app, {
  express: { views: ['views'] }
});

app.get('/hello-world', (req, res) => {
  res.render('HelloWorld');
});

app.listen(3000);
