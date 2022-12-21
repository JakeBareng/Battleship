import Ship from './ship';

const Gameboard = () => {
  const size = 10;
  const arr = new Array(size);
  const listOfShips = [
    new Ship(5),
    new Ship(4),
    new Ship(3),
    new Ship(3),
    new Ship(2),
  ];
  for (let i = 0; i < arr.length; i += 1) arr[i] = new Array(size);
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr.length; j += 1) {
      arr[i][j] = {
        hasBeenHit: false,
        ship: null,
      };
    }
  }
  const placeShip = (x, y, ship, isVerticle) => {
    const lengthOfShip = ship.length;
    if ((isVerticle && y + lengthOfShip > size) || (!isVerticle && x + lengthOfShip > size)) {
      return false;
    }
    if (isVerticle) {
      for (let i = 0; i < lengthOfShip; i += 1) {
        arr[x][y + i].ship = ship;
      }
    } else {
      for (let i = 0; i < lengthOfShip; i += 1) {
        arr[x + i][y].ship = ship;
      }
    }
    return true;
  };
  const receiveAttack = (x, y) => {
    if (arr[x][y]) {
        
    }
  };
  const allSunken = () => {
    listOfShips.forEach((ship) => {
      if (ship.isSunk()) {
        return true;
      }
    });
  };
  return { receiveAttack, allSunken, placeShip };
};
export default Gameboard;
