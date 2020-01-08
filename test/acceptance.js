const { expect } = require('chai');
const { boardKey, board, printBoard, markBoard, clear, checkWin } = require('../app');

describe('Acceptance Tests: Tic Tac Toe', () => {
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
    it('Displays that player can make a move on board', () => {
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

    it('Determines if current player wins', () => {
      let player = 'X';
      markBoard(1, 'X');
      markBoard(2, 'X');
      markBoard(3, 'X');
      let playerWin = checkWin(player) === true;
      expect(playerWin).to.equal(true, 'player has drawn a row of three symbols');
    });
  
  }); 
});
