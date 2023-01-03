export const player = {
  board: null,
  opponentBoard: null,
  placeShip: (x, y, length, isVerticle) => {
    player.board.placeShip(x, y, length, isVerticle);
  },
  attack: (x, y) => {
    return player.opponentBoard.receiveAttack(x, y);
  },
  hasWon: () => player.opponentBoard.allSunken(),
};
export const computer = {
  board: null,
  opponentBoard: null,
  randomAttack: () => {
    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 10);
    while (!this.opponentBoard.receiveAttack(x, y)) {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
    }
  },
  placeShip: (x, y, length, isVerticle) => {
    computer.board.placeShip(x, y, length, isVerticle);
  },
  hasWon: () => computer.opponentBoard.allSunken(),
};
