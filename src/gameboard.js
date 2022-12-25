import Ship from './ship';

const Gameboard = () => {
  const size = 10;
  const arr = new Array(size);
  const listOfShips = [];

  for (let i = 0; i < arr.length; i += 1) arr[i] = new Array(size);
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr.length; j += 1) {
      arr[i][j] = {
        hasBeenHit: false,
        ship: null,
      };
    }
  }
  const placeShip = (x, y, shipLen, isVerticle) => {
    const lengthOfShip = shipLen;
    if ((isVerticle && y + lengthOfShip > size) || (!isVerticle && x + lengthOfShip > size)) {
      return false;
    }
    const ship = new Ship(shipLen);
    if (isVerticle) {
      for (let i = 0; i < lengthOfShip; i += 1) {
        if (arr[x][y + i].ship !== null) {
          return false;
        }
      }
      for (let i = 0; i < lengthOfShip; i += 1) {
        arr[x][y + i].ship = ship;
      }
    } else {
      for (let i = 0; i < lengthOfShip; i += 1) {
        if (arr[x + i][y].ship !== null) {
          return false;
        }
      }
      for (let i = 0; i < lengthOfShip; i += 1) {
        arr[x + i][y].ship = ship;
      }
    }
    listOfShips.push(ship);
    return true;
  };
  const receiveAttack = (x, y) => {
    const square = arr[x][y];
    if (square.hasBeenHit) { return false; }
    if (square.ship === null) {
      square.hasBeenHit = true;
    } else {
      square.hasBeenHit = true;
      square.ship.hit();
    }
    return true;
  };
  const allSunken = () => {
    for (let i = 0; i < listOfShips.length; i += 1) {
      if (!listOfShips[i].isSunk()) return false;
    }
    return true;
  };

  return {
    receiveAttack, allSunken, placeShip, get grid() { return arr; },
  };
};
export default Gameboard;
