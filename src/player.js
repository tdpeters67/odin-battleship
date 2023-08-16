import { GameboardFactory } from "./gameboardFactory";

export const PlayerFactory = function () {
  function sendAttack(gameboard, hitCoordinate) {
    gameboard.receiveAttack(hitCoordinate);
  }
  return { sendAttack };
};

export const ComputerFactory = function () {
  function sendAttack(gameboard, hitCoordinate) {
    gameboard.receiveAttack(hitCoordinate);
  }
  return { sendAttack };
};

//make sure computerfactory knows not to go to the same spot twice
