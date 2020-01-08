const { expect } = require('chai');
const {  board, markBoard, printBoard, clear, checkWin } = require('../app');

describe('Unit Tests: Game Play', () => {
  afterEach(() => {
    clear(board);
  });

  describe('Board', () => {
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

    it('should clear the board', () => {
      markBoard(3, 'X');
      clear(board);
      expect(board[3]).to.equal(' ');
    });
  });

  describe('Check Win', () => {
    it('should return true if player X wins', () => {
      let player = 'X';

      markBoard(1, 'X');
      markBoard(4, 'O');
      markBoard(2, 'X');
      markBoard(3, 'O');
      markBoard(7, 'O');
      markBoard(8, 'O');
      markBoard(9, 'X');
      markBoard(5, 'X');
      markBoard(6, 'X');

      expect(checkWin(player)).to.equal(true, 'player X has drawn three in a row');
    });

    it('should return true if player X loses', () => {
      let player = 'X';

      markBoard(1, 'X');
      markBoard(4, 'O');
      markBoard(2, 'X');
      markBoard(3, 'O');
      markBoard(7, 'X');
      markBoard(8, 'O');
      markBoard(9, 'X');
      markBoard(5, 'O');
      markBoard(6, 'X');

      expect(checkWin(player)).to.equal(false, 'player X has lost the game');
    });

    describe('Winning Combinations', () => {
      it('returns true for [4, 5, 6]', () => {
        let player = 'X';
  
        markBoard(4, 'X');
        markBoard(5, 'X');
        markBoard(6, 'X');
  
        expect(checkWin(player)).to.equal(true, 'player X has won the game');
      });

      it('returns true for [7, 8, 9]', () => {
        let player = 'X';

        markBoard(7, 'X');
        markBoard(8, 'X');
        markBoard(9, 'X');

        expect(checkWin(player)).to.equal(true, 'player X has won the game');
      });

      it('returns true for [1, 4, 7]', () => {
        let player = 'X';

        markBoard(1, 'X');
        markBoard(4, 'X');
        markBoard(7, 'X');

        expect(checkWin(player)).to.equal(true, 'player X has won the gamee');
      });

      it('returns true for [2, 5, 8]', () => {
        let player = 'X';

        markBoard(2, 'X');
        markBoard(5, 'X');
        markBoard(8, 'X');

        expect(checkWin(player)).to.equal(true, 'player X has won the game');
      });

      it('returns true for [3, 6, 9]', () => {
        let player = 'X';

        markBoard(3, 'X');
        markBoard(6, 'X');
        markBoard(9, 'X');

        expect(checkWin(player)).to.equal(true, 'player X has won the game');
      });

      it('returns true for [1, 5, 9]', () => {
        let player = 'X';

        markBoard(1, 'X');
        markBoard(5, 'X');
        markBoard(9, 'X');

        expect(checkWin(player)).to.equal(true, 'player X has won the game');
      });

      it('returns true for [3, 5, 7]', () => {
        let player = 'X';

        markBoard(3, 'X');
        markBoard(5, 'X');
        markBoard(7, 'X');

        expect(checkWin(player)).to.equal(true, 'player X has won the game');
      });
    });
  })
});