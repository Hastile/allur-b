const express = require('express');
const app = express();
const ejs = require('ejs');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
  res.render('index', { message: 'Hello World!' });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});