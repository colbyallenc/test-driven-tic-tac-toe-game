var prompt = require('prompt');
const { boardKey, board, printBoard, markBoard, checkWin } = require('./app');

function isInterger(value) {
  if (isNaN(value)) {
    return false;
  }
  let x = parseFloat(value);
  return (x | 0) === x;
}

function validateMove(position) {
  if (isInterger(position) === true && board[position] === ' ') {
      return true;
  }
  return false;
}

function playTurn(player) {

  console.log('Your turn player: ' + player);
  prompt.start();
  prompt.get(['position'], function (err, result) {

      if (validateMove(result.position) === true) {
          markBoard(result.position, player);
          printBoard();
          if (checkWin(player) === true) {
              console.log('Winner Winner!! Chicken nuggests!..?');
              return;
          }
          if (player === 'X') {
              playTurn('O');
          } else {
              playTurn('X');
          }
      } else {
          console.log('incorrect input, try again :)');
          playTurn(player);
      }
  });
}

console.log(boardKey);

playTurn('X');