import Gameboard from './gameboard';
import { player, computer } from './player';
import { renderGrid } from './DOM';

const computerBoard = Gameboard();
const playerBoard = Gameboard();

player.board = playerBoard;
player.opponentBoard = computerBoard;
computer.board = computerBoard;
computer.opponentBoard = playerBoard;



const computerGridDOM = document.getElementById('computer-board')
const playerGridDOM = document.getElementById('player-board')

export const gameStart = () => {
  let planningPhase = true;
  let playerGrid = player.board.grid
  let computerGrid = computer.board.grid
  let shipLengthArray = [2,2,3,4,5]; 
  renderGrid(playerGrid,computerGrid);

  document.addEventListener('click',(e) => {
    const element = e.target;
    if (element.parentElement.parentElement.className !== 'boards') return;
    let coord = Array.from(element.dataset.elementNum.split(","),Number);
    if (element.parentElement === computerGridDOM) {
      let validAttack = player.attack(coord[1],coord[0]);
      if (validAttack) {
        computer.randomAttack();
        renderGrid(playerGrid,computerGrid);
        /* -----------------------check if there's a winner-------------------- */
      }
    }
    else if (element.parentElement === playerGridDOM) {
      if (planningPhase == true) {
        if (player.placeShip(coord[1],coord[0],shipLengthArray[shipLengthArray.length-1],true)) {
          /* ----------place enemy ship--------- */
          shipLengthArray.pop();
          if (shipLengthArray.length == 0) planningPhase = false;
        }
        renderGrid(playerGrid,computerGrid);
      }
    }
  })
};
