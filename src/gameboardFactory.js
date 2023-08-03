import { ShipFactory } from "./ship";

export const GameboardFactory = function () {
  const shipArrayBoard = [];
  const missedShots = [];
  const previouslyShotShots = [];

  function placeShip(coordinates) {
    const shipObject = ShipFactory(coordinates);
    shipArrayBoard.push(shipObject);
  }
  function receiveAttack(hitCoordinate) {
    if (previouslyShotShots.indexOf(hitCoordinate) !== -1) {
      return "You can't shoot the same shot twice";
    }
    previouslyShotShots.push(hitCoordinate);

    shipArrayBoard.map((ship) => {
      const shipCoordinates = ship.coordinates;

      if (shipCoordinates.indexOf(hitCoordinate) !== -1) {
        ship.hit(shipCoordinates.indexOf(hitCoordinate));
      } else if (shipCoordinates.indexOf(hitCoordinate) == -1) {
        missedShots.push(hitCoordinate);
      }
    });
  }
  function reportAllShipsSunk() {
    const allSunkShipsArray = shipArrayBoard.map((ship) => ship.isSunk());
    return allSunkShipsArray.every((sunkShip) => sunkShip === true);
  }

  return {
    shipArrayBoard,
    missedShots,
    previouslyShotShots,
    placeShip,
    receiveAttack,
    reportAllShipsSunk,
  };
};
