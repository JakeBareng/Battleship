export const renderGrid = (gameboard, gameboard2) => {
  const playerBoard = document.getElementById('player-board');
  const computerBoard = document.getElementById('computer-board');

  // Clear the existing children elements
  playerBoard.innerHTML = '';
  computerBoard.innerHTML = '';

  for (let i = 0; i < gameboard.length; i += 1) {
    for (let k = 0; k < gameboard.length; k += 1) {
      const square = document.createElement('div');
      square.classList.add('grid-square', 'clickable');

      let className;
      if (gameboard[k][i].ship !== null) {
        if (gameboard[k][i].hasBeenHit) {
          className = 'grid-square-hit';
        } else {
          className = 'grid-square-ship';
        }
      } else if (gameboard[k][i].hasBeenHit) {
        className = 'grid-square-miss';
      } else {
        className = 'grid-square-empty';
      }
      square.classList.add(className, 'clickable');
      square.dataset.elementNum = `${i},${k}`;
      playerBoard.append(square);

      const square2 = document.createElement('div');
      square2.classList.add('grid-square', 'clickable');

      let className2;
      if (gameboard2[k][i].ship !== null) {
        if (gameboard2[k][i].hasBeenHit) {
          className2 = 'grid-square-hit';
        } else {
          className2 = 'grid-square-empty';
        }
      } else if (gameboard2[k][i].hasBeenHit) {
        className2 = 'grid-square-miss';
      } else {
        className2 = 'grid-square-empty';
      }
      square2.classList.add(className2, 'clickable');
      square2.dataset.elementNum = `${i},${k}`;
      computerBoard.append(square2);
    }
  }
};
export const displayWinner = (name) => {
  document.querySelector('.game-heading').innerHTML = `${name} has won!`;
};
export const displayHeadingTitle = (text) => {
  document.querySelector('.heading-title').textContent = text;
};
export const displayLength = (len) => {
  document.querySelector('.length').textContent = len;
};
export const displayPlacement = (placementType) => {
  document.querySelector('.placement').textContent = placementType;
};
export const displayShipsLeft = (numberOfShips) => {
  document.querySelector('.ships-left').textContent = numberOfShips;
};
export const removePlanningPhase = () => {
  document.querySelector('.heading-title').textContent = '';
  document.querySelector('.length').textContent = '';
  document.querySelector('.placement').textContent = '';
  document.querySelector('.ships-left').textContent = '';
  document.getElementById('swap').remove();
};
