import { GameboardFactory } from "./gameboardFactory";

export const PlayerFactory = function () {
  function sendAttack(gameboard, hitCoordinate) {
    gameboard.receiveAttack(hitCoordinate);
  }
  return { sendAttack };
};

export const ComputerFactory = function () {
  return Object.assign(PlayerFactory(), {});
};
