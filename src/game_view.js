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
