const playerBoard = document.getElementById('player-board');
const computerBoard = document.getElementById('computer-board');

export const renderGrid = (gameboard,gameboard2) => {
  for (let i = 0; i < gameboard.length; i+= 1) {
    for (let k = 0; k < gameboard.length; k+= 1) {
      const square = document.createElement('div');
      square.classList.add('grid-square', 'clickable');
      if (gameboard[k][i].ship !== null) {
        if (gameboard[k][i].hasBeenHit) {
          square.classList.add('grid-square-hit', 'clickable');
        } else { square.classList.add('grid-square-ship', 'clickable'); }
      } else if (gameboard[k][i].hasBeenHit) {
        square.classList.add('grid-square-miss', 'clickable');
      } else { square.classList.add('grid-square-empty', 'clickable'); }
      square.dataset.elementNum = `${i},${k}`;
      playerBoard.append(square);

      const square2 = document.createElement('div');
      square2.classList.add('grid-square', 'clickable');
      if (gameboard2[k][i].ship !== null) {
        if (gameboard2[k][i].hasBeenHit) {
          square2.classList.add('grid-square-hit', 'clickable');
        } else { square2.classList.add('grid-square-ship', 'clickable'); }
      } else if (gameboard2[k][i].hasBeenHit) {
        square2.classList.add('grid-square-miss', 'clickable');
      } else { square2.classList.add('grid-square-empty', 'clickable'); }
      square2.dataset.elementNum = `${i},${k}`;
      computerBoard.append(square2);
    }
  }
};
