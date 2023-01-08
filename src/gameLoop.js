import Gameboard from './gameboard';
import { player, computer } from './player';
import { renderGrid } from './DOM';

const computerBoard = Gameboard();
const playerBoard = Gameboard();

player.board = playerBoard;
player.opponentBoard = computerBoard;
computer.board = computerBoard;
computer.opponentBoard = playerBoard;

const computerGridDOM = document.getElementById('computer-board');
const playerGridDOM = document.getElementById('player-board');

export const gameStart = () => {
  let planningPhase = true;
  const playerGrid = player.board.grid;
  const computerGrid = computer.board.grid;
  const shipLengthArray = [2, 2, 3, 4, 5];
  renderGrid(playerGrid, computerGrid);

  document.addEventListener('click', (e) => {
    const element = e.target;
    if (!(element.closest('#player-board') || element.closest('#computer-board'))) return;
    const coord = Array.from(element.dataset.elementNum.split(','), Number);
    if (element.closest('#computer-board') !== null && !planningPhase) {
      const validAttack = player.attack(coord[1], coord[0]);
      if (validAttack) {
        if (player.hasWon()) {
          /* ---------------display winner--------------- */
        }
        computer.randomAttack();
        if (computer.hasWon()) {
          /* ---------------display winner----------------- */
        }
        renderGrid(playerGrid, computerGrid);
      }
    }
    
    if (element.closest('#player-board') && planningPhase) {
      if (player.placeShip(coord[1], coord[0], shipLengthArray[shipLengthArray.length - 1], true)) {
        computer.placeShip(shipLengthArray[shipLengthArray.length - 1]);
        shipLengthArray.pop();
        if (shipLengthArray.length === 0) planningPhase = false;
      }
      renderGrid(playerGrid, computerGrid);
    }
  });
};
