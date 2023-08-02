import { GameboardFactory } from "./gameboardFactory";

const testGameboardFactory = GameboardFactory();

test("PlaceShip", () => {
  testGameboardFactory.placeShip(["A1", "B1", "C1", "D1"]);
  expect(testGameboardFactory.shipArrayBoard[0].coordinates).toStrictEqual([
    "A1",
    "B1",
    "C1",
    "D1",
  ]);
});
test("ReceiveAttack", () => {
  testGameboardFactory.receiveAttack("D1");
  const testShip = testGameboardFactory.shipArrayBoard[0];
  expect(testShip.shipArray).toStrictEqual(["A1", "B1", "C1", "hit"]);
});
test("MissedAttack", () => {
  testGameboardFactory.receiveAttack("E1");
  const testShip = testGameboardFactory.shipArrayBoard[0];
  expect(testShip.shipArray).toStrictEqual(["A1", "B1", "C1", "hit"]);
});
test("save misses", () => {
  expect(testGameboardFactory.missedShots).toContain("E1");
});
test("save shots in array", () => {
  expect(testGameboardFactory.previouslyShotShots).toContain("D1");
  expect(testGameboardFactory.previouslyShotShots).toContain("E1");
});
test("can't shoot same shot twice", () => {
  expect(testGameboardFactory.receiveAttack("E1")).toBe(
    "You can't shoot the same shot twice"
  );
});
