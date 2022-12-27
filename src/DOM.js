const playerBoard = document.getElementById('player-board');
const computerBoard = document.getElementById('computer-board');
export const renderGrid = (gameboard) => {
    console.log(gameboard);
  for (let i = 0; i < gameboard.length; i++) {
    for (let k = 0; k < gameboard[i].length; k++) {
        const square = document.createElement('div');
        square.classList.add('grid-square', 'clickable');
        if (gameboard[k][i].ship !== null) {
            if (gameboard[k][i].hasBeenHit) {
                square.classList.add('grid-square-hit', 'clickable');
            }
            else
                square.classList.add('grid-square-ship', 'clickable');
        }
        else if (gameboard[k][i].hasBeenHit) {
            square.classList.add('grid-square-miss', 'clickable');
        }
        else
            square.classList.add('grid-square-empty', 'clickable')

        square.dataset.elementNum = i+","+k;
        playerBoard.append(square);
    }    
  }
};
