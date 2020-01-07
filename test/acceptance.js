const { expect } = require('chai');
const { boardKey, board, printBoard, markBoard, clear, checkWin } = require('../app');

describe.only('Acceptance Tests: Tic Tac Toe', () => {
  afterEach(() => {
    clear(board);
  });

  describe('Game Board', () => {
    it('Displays the Game Board', () => {
      const expected = [
      'Game started:',
      ' 1 | 2 | 3 ',
      ' --------- ',
      ' 4 | 5 | 6 ',
      ' --------- ',
      ' 7 | 8 | 9 ',].join('\n');
      expect((boardKey)).to.deep.equal(expected);
    });
    it('Displays an empty Game Board', () => {
      const expected = [
      '   |   |   ',
      ' --------- ',
      '   |   |   ',
      ' --------- ',
      '   |   |   ',
      ].join('\n');
      expect((printBoard())).to.deep.equal(expected);
    });
  });

  describe('Player Moves', () => {
    it('Displays that player can make a move', () => {
      markBoard(5, 'X');
      const expected = [
        '   |   |   ',
        ' --------- ',
        '   | X |   ',
        ' --------- ',
        '   |   |   ',
        ].join('\n');    
      expect(printBoard()).to.deep.equal(expected);
    });
  });

  describe('Game Win', () => { 
    it('Determines if current player wins', () => {
      let player = 'X';
      markBoard(1, 'X');
      markBoard(2, 'X');
      markBoard(3, 'X');
      let playerWin = checkWin(player) === true;
      expect(playerWin).to.equal(true, 'player has drawn a row of three symbols');
    });
    
    it('Determines if current player loses', () => {
      let player = 'X';
      markBoard(7, 'X');
      markBoard(8, 'O');
      markBoard(9, 'X');
      markBoard(3, 'O');
      markBoard(1, 'X');
      expect(checkWin(player)).to.equal(false, 'current player lost');
    });

    it('Determines if players tie match', () => {
      let playerX = 'X';
      let playerO = 'O';

      markBoard(1, 'X');
      markBoard(4, 'O');
      markBoard(2, 'X');
      markBoard(3, 'O');
      markBoard(7, 'X');
      markBoard(8, 'O');
      markBoard(9, 'X');
      markBoard(5, 'O');
      markBoard(6, 'X');

      expect(checkWin(playerX)).to.equal(false, 'player has tied game');
      expect(checkWin(playerO)).to.equal(false, 'player has tied game');
    });
  }); 
});
