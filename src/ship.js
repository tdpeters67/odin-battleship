export const ShipFactory = function (coordinates) {
  const shipArray = [];

  coordinates.map((coordinate) => {
    return shipArray.push(coordinate);
  });
  function hit(hitIndex) {
    shipArray[hitIndex] = "hit";
  }
  function isSunk() {
    const isSinking = (shipPart) => shipPart === "hit";
    return shipArray.every(isSinking);
  }
  return {
    hit,
    isSunk,
    coordinates,
    shipArray,
  };
};
