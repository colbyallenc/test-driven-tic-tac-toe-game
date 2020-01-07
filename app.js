const boardKey = [
  'Game started:',
  ' 1 | 2 | 3 ',
  ' --------- ',
  ' 4 | 5 | 6 ',
  ' --------- ',
  ' 7 | 8 | 9 ',
].join('\n');

let board = {
  1: ' ',
  2: ' ',
  3: ' ',
  4: ' ',
  5: ' ',
  6: ' ',
  7: ' ',
  8: ' ',
  9: ' '
};

function markBoard(position, mark) {
  board[position] = mark.toUpperCase();
}

function printBoard(){
  return [
    ` ${board[1]} | ${board[2]} | ${board[3]} `,
    ' --------- ',
    ` ${board[4]} | ${board[5]} | ${board[6]} `,
    ' --------- ',
    ` ${board[7]} | ${board[8]} | ${board[9]} `,
  ].join('\n');
}

function clear(board) {
  for (let i in board) {
    board[i] = ' ';
  }
}

function checkWin(player) {
  const winCombinations = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7],
  [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];

  for (let i = 0; i < winCombinations.length; i++) {
    let markCount = 0;
    for (let j = 0; j < winCombinations[i].length; j++) {
      if (board[winCombinations[i][j]] === player) {
        markCount++;
      }
      if (markCount === 3) {
        return true;
      }
    }
  }
  return false;
}

module.exports = { 
  boardKey,
  board,
  markBoard,
  printBoard,
  clear,
  checkWin
}