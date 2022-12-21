export const Ship = (length) => {
  const lengthOfShip = length;
  let hits = 0;
  let isSunken = false;
  const hit = () => {
    hits++;
  };
  const isSunk = () => {
    if (hits == lengthOfShip) isSunken = true;
    return isSunken;
  };
  return { hit, isSunk };
};
