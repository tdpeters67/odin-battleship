import { PlayerFactory, ComputerFactory } from "./player";
import { GameboardFactory } from "./gameboardFactory";

const human = PlayerFactory();
const humanGameboard = GameboardFactory();
humanGameboard.placeShip(["A1", "B1", "C1", "D1"]);

const cpu = ComputerFactory();
const cpuGameboard = GameboardFactory();
cpuGameboard.placeShip(["A2", "B2", "C2", "D2"]);

test("human attacks cpu", () => {
  human.sendAttack(cpuGameboard, "A2");
  expect(cpuGameboard.shipArrayBoard[0].shipArray).toStrictEqual([
    "hit",
    "B2",
    "C2",
    "D2",
  ]);
});
test("cpu attacks human", () => {
  cpu.sendAttack(humanGameboard, "A1");
  expect(humanGameboard.shipArrayBoard[0].shipArray).toStrictEqual([
    "hit",
    "B1",
    "C1",
    "D1",
  ]);
});
test("cpu misses human", () => {
  cpu.sendAttack(humanGameboard, "A2");
  expect(humanGameboard.missedShots).toContain("A2");
  expect(humanGameboard.shipArrayBoard[0].shipArray).toStrictEqual([
    "hit",
    "B1",
    "C1",
    "D1",
  ]);
});
test("sendAttack saves shots", () => {
  cpu.sendAttack(humanGameboard, "C1");
  expect(humanGameboard.previouslyShotShots).toContain("C1");
});

test("cant shoot same shot twice", () => {
  cpu.sendAttack(humanGameboard, "C1");
  expect(humanGameboard.receiveAttack("C1")).toBe(
    "You can't shoot the same shot twice"
  );
});
test("human destroys cpu ships", () => {
  human.sendAttack(cpuGameboard, "A2");
  human.sendAttack(cpuGameboard, "B2");
  human.sendAttack(cpuGameboard, "C2");
  human.sendAttack(cpuGameboard, "D2");
  expect(cpuGameboard.reportAllShipsSunk()).toBeTruthy();
  expect(cpuGameboard.shipArrayBoard[0].shipArray).toStrictEqual([
    "hit",
    "hit",
    "hit",
    "hit",
  ]);
});
