/* jshint node:true */
'use strict';

var express = require('express');
var app = module.exports.app = exports.app = express();
require('express-ws')(app);

var path = require('path');
var _ = require('lodash');

var users = {};

app.get('/', function (req, res) {
  var indexPath = path.join(__dirname, 'index.html');
  res.sendFile(indexPath);
});

app.get('/dist/all.js', function (req, res) {
  var gamePath = path.join(__dirname, 'dist', 'all.js');
  res.sendFile(gamePath);
});

app.ws('/ws', function (ws, req) {

  // register new user
  var userId = _.size(users).toString();
  users[userId] = ws;
  var newUserMessage = ['newUser', userId].join(':');
  ws.send(newUserMessage);

  ws.on('message', function (messageStr) {
    console.log(userId, ' says: ', messageStr);
  });

  ws.on('close', function () {
    users[userId] = null;
  });

});

app.listen(8000);
