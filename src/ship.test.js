import { ShipFactory } from "./ship";

const testShip = ShipFactory(["A1", "B1", "C1", "D1"]);
const testShipTwo = ShipFactory(["A1", "B1", "C1", "D1"]);
const testShipThree = ShipFactory(["A1", "B1", "C1", "D1"]);

test("Ship takes damage", () => {
  testShip.hit(0);
  const { shipArray } = testShip;
  expect(shipArray).toStrictEqual(["hit", "B1", "C1", "D1"]);
});

test("Ship isn't destroyed", () => {
  testShipTwo.hit(1);
  testShipTwo.hit(2);
  testShipTwo.hit(3);
  const result = testShipTwo.isSunk();

  expect(result).toBeFalsy();
  expect(testShipTwo.shipArray).toStrictEqual(["A1", "hit", "hit", "hit"]);
});

test("Ship is destroyed", () => {
  testShipThree.hit(0);
  testShipThree.hit(1);
  testShipThree.hit(2);
  testShipThree.hit(3);
  const result = testShipThree.isSunk();

  expect(result).toBeTruthy();
  expect(testShipThree.shipArray).toStrictEqual(["hit", "hit", "hit", "hit"]);
});
