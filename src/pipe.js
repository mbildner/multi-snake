function Pipe () {
  'use strict';

  var pipe = this;

  var ws = new WebSocket('ws://localhost:8000/ws');

  handle(ws, 'message', function (message) {
    console.log('ws got message:\n', message);
  });

  handle(ws, 'close', function () {
    console.log('ws closed');
  });

  handle(ws, 'error', function () {
    console.log('ws had error');
  });

  this.send = function (messageStr) {
    ws.send(messageStr);
    return pipe;
  };
}
