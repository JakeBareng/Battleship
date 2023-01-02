import Gameboard from './gameboard';
import { player, computer } from './player';
import { renderGrid } from './DOM';

const computerBoard = Gameboard();
const playerBoard = Gameboard();

player.board = playerBoard;
player.opponentBoard = computerBoard;
computer.board = computerBoard;
computer.opponentBoard = playerBoard;

player.placeShip(0, 0, 2, true);
player.placeShip(1, 0, 2, true);
player.placeShip(2, 0, 2, true);
player.placeShip(3, 0, 2, true);

export const gameStart = () => {
  let playerGrid = player.board.grid
  let computerGrid = computer.board.grid
  renderGrid(playerGrid,computerGrid);
};
