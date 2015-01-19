document.addEventListener('DOMContentLoaded', function () {
function Client (pipe) {





}

function Board () {
  'use strict';

  var rowsNum = 40;
  var colsNum = 40;

  this.getSize = function () {
    return {
      rows: rowsNum,
      cols: colsNum
    };
  };

  var boardModel = [];
  var rowModel;
  var colModel;
  var r, c;

  for (r=0; r<rowsNum; r++) {
    rowModel = [];
    for (c=0; c<colsNum; c++) {
      rowModel.push({});
    }
    boardModel.push(rowModel);
  }

  // nuke the reference
  rowModel = null;

}

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

function View (model) {

  var boardCanvas = document.getElementsByTagName('canvas')[0];

  boardCanvas.width = 600;
  boardCanvas.height = 600;

  var boardSize = model.getSize();

  var rowsNum = boardSize.rows;
  var colsNum = boardSize.cols;

  var rowHeight = 600 / rowsNum;
  var colWidth = 600 / colsNum;


  var ctx = boardCanvas.getContext('2d');

  ctx.fillStyle = 'rgba(100, 10, 10, 0.1)';
  ctx.fillRect(0, 0, 1000, 1000);

  function paintBox (col, row) {
    var startX = colWidth * col;
    var width = colWidth;

    var startY = rowHeight * row;
    var height = rowHeight;

    ctx.fillStyle = 'blue';
    ctx.fillRect(startX, startY, width, height);

  }

  this.paintBox = paintBox;
}

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

function handle (element, eventName, callback) {
  element.addEventListener(eventName, callback);
  return element.removeEventListener.bind(element, eventName, callback);
}

function once (element, eventName, callback) {
  var clearListener = handle(element, eventName, function () {
    callback.apply(null, arguments);
    clearListener();
  });
}
})