const Ship = (length) => {
  let hits = 0;
  let isSunken = false;
  const hit = () => {
    if (hits !== length) hits += 1;
  };
  const isSunk = () => {
    if (hits === length) isSunken = true;
    return isSunken;
  };
  return { hit, isSunk, length };
};
export default Ship;
