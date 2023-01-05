export const player = {
  board: null,
  opponentBoard: null,
  placeShip: (x, y, length, isVerticle) => {
    return player.board.placeShip(x, y, length, isVerticle);
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
    while (!computer.opponentBoard.receiveAttack(x, y)) {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
    }
  },
  placeShip: (x, y, length, isVerticle) => {
    return computer.board.placeShip(x, y, length, isVerticle);
  },
  hasWon: () => computer.opponentBoard.allSunken(),
};
