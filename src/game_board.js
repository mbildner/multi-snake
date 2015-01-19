'use strict';

var board = document.getElementsByTagName('canvas')[0];

board.width = 1000;
board.height = 1000;

var ctx = board.getContext('2d');

ctx.fillStyle = 'red';
ctx.fillRect(0, 0, 1000, 1000);
