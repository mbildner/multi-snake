'use strict';

var ws = new WebSocket('ws://localhost:8000/ws');

function handle (element, eventName, callback) {
  element.addEventListener(eventName, callback);
  return element.removeEventListener.bind(element, eventName, callback);
}

handle(ws, 'open', function () {
  console.log('ws is open');
});

handle(ws, 'message', function (message) {
  console.log('ws got message:\n', message);
});

handle(ws, 'close', function () {
  console.log('ws closed');
});

handle(ws, 'error', function () {
  console.log('ws had error');
});
