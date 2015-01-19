function Controller (pipe) {
  'use strict';

  var keyDict = {
    '37': function (event) {
      event.preventDefault();
    },
    '38': function (event) {
      event.preventDefault();
    },
    '39': function (event) {
      event.preventDefault();
    },
    '40': function (event) {
      event.preventDefault();
    }
  };

  function defaultKeyHandler () {
    console.log('no registered handler for this key');
  }

  handle(document, 'keydown', function (event) {
    var key = event.which;

    (keyDict[key] || defaultKeyHandler)(event);

  });
}

var pipe = new Pipe();
var controller = new Controller(pipe);
var board = new Board();
var view = new View(board);

window.pipe = pipe;
