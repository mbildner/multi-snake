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
