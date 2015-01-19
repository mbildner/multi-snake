/* jshint node:true */
'use strict';

var app = require('express')();
require('express-ws')(app);

var path = require('path');

app.get('/', function (req, res) {
  var indexPath = path.join(__dirname, 'index.html');
  res.sendFile(indexPath);
});

app.get('/dist/all.js', function (req, res) {
  var gamePath = path.join(__dirname, 'dist', 'all.js');
  res.sendFile(gamePath);
});

app.ws('/ws', function (ws, req) {
  ws.send('hello back from the server!');

  ws.on('message', function (msg) {
    console.log(arguments)
    ws.send('echo: ' + msg);
  });
});

app.listen(8000);
