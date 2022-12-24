import Gameboard from './gameboard';

const computerBoard = new Gameboard();
const playerBoard = new Gameboard();
export const player = {
  board: playerBoard,
  opponentBoard: computerBoard,
  placeShip: (x, y, length, isVerticle) => {
    playerBoard.placeShip(x, y, length, isVerticle);
  },
  attack: (x, y) => {
    this.opponentBoard.receiveAttack(x, y);
  },
  hasWon: () => {
    playerBoard.allSunken();
  },
};
export const computer = {
  board: computerBoard,
  opponentBoard: playerBoard,
  randomAttack: () => {
    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 10);
    while (!this.opponentBoard.receiveAttack(x, y)) {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
    }
  },
  placeShip: (x, y, length, isVerticle) => {
    playerBoard.placeShip(x, y, length, isVerticle);
  },
  hasWon: () => {
    playerBoard.allSunken();
  },
};
