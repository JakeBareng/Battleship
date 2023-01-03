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

computer.placeShip(0, 0, 2, true);
computer.placeShip(1, 0, 2, true);
computer.placeShip(2, 0, 2, true);
computer.placeShip(3, 0, 2, true);

let computerGridDOM = document.getElementById('computer-board')
let playerGridDOM = document.getElementById('player-board')

export const gameStart = () => {
  let planningPhase = false;
  let playerGrid = player.board.grid
  let computerGrid = computer.board.grid
  renderGrid(playerGrid,computerGrid);

  document.addEventListener('click',(e) => {
    const element = e.target;
    let coord = element.dataset.elementNum.split(",");
    if (element.parentElement === computerGridDOM) {
      let validAttack = player.attack(coord[1],coord[0]);
      if (validAttack) {
        renderGrid(playerGrid,computerGrid)
      }
      /* ----------------continue to opponent move------------------- */
    }
    else if (element.parentElement === playerGridDOM) {
      if (planningPhase == true) {
        /* --------------------create planning phase-------------------- */
      }
    }
  })



};
