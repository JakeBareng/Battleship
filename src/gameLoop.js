import Gameboard from './gameboard';
import { player, computer } from './player';
import {
  renderGrid, displayWinner, displayHeadingTitle, displayLength, displayPlacement, displayShipsLeft, removePlanningPhase,
} from './DOM';

const computerBoard = Gameboard();
const playerBoard = Gameboard();

player.board = playerBoard;
player.opponentBoard = computerBoard;
computer.board = computerBoard;
computer.opponentBoard = playerBoard;

export const gameStart = () => {
  let planningPhase = true;
  let isVerticle = true;
  let gameFinished = false;

  const playerGrid = player.board.grid;
  const computerGrid = computer.board.grid;
  const shipLengthArray = [2, 2, 3, 4, 5];
  renderGrid(playerGrid, computerGrid);

  document.addEventListener('click', (e) => {
    const element = e.target;
    if (element === document.getElementById('swap')) {
      isVerticle = !isVerticle;
      isVerticle ? displayPlacement('placement: verticle') : displayPlacement('placement: horizontal');
    }
    if (!(element.closest('#player-board') || element.closest('#computer-board'))) return;
    const coord = Array.from(element.dataset.elementNum.split(','), Number);
    if (planningPhase && !gameFinished) {
      if (element.closest('#player-board')) {
        const length = shipLengthArray[shipLengthArray.length - 1];
        if (player.placeShip(coord[1], coord[0], length, isVerticle)) {
          shipLengthArray.pop();
          computer.placeShip(length);
          displayLength(`ship length: ${length}`);
          displayShipsLeft(`ships left: ${shipLengthArray.length}`);
          if (shipLengthArray.length === 0) {
            planningPhase = false;
            removePlanningPhase();
            displayHeadingTitle('attack enemy board');
          }
        }
        renderGrid(playerGrid, computerGrid);
      }
    } else if (element.closest('#computer-board') && !gameFinished) {
      const validAttack = player.attack(coord[1], coord[0]);
      if (validAttack) {
        if (player.hasWon()) {
          displayWinner('User');
          gameFinished = true;
        }
        computer.randomAttack();
        if (computer.hasWon()) {
          displayWinner('computer');
          gameFinished = true;
        }
        renderGrid(playerGrid, computerGrid);
      }
    }
  });
};
