const { expect } = require('chai');
const {  board, markBoard, printBoard, clear } = require('../app');

describe('Unit Tests: Board', () => {
  afterEach(() => {
    clear(board);
  });

  it('Print Board Object', () => {
    const expected = [
      '   |   |   ',
      ' --------- ',
      '   |   |   ',
      ' --------- ',
      '   |   |   ',
      ].join('\n');
    expect(printBoard()).to.deep.equal(expected);
  });

   it('Mark Board Object', () => {
    markBoard(5, 'X');
    const isMarked = board[5] === 'X';
    expect(isMarked).to.equal(true, 'board[5] should have an X');
  });

  it('Multiple Players Mark Board Object', () => {
    markBoard(8, 'X');
    markBoard(7, 'O');
    const isMarked = board[8] === 'X' && board[7] === "O";
    expect(isMarked).to.equal(true, 'board[8] should have an X, board[7] should have an O');
  });
});
