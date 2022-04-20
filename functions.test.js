const functions = require("./functions");

test("Adds 2 + 2 to equal 4", () => {
  expect(functions.sum(2, 2)).toBe(4);
});

test("Multiply 2 * 2 to equal 4", () => {
  expect(functions.multiply(2, 2)).toBe(4);
});

test("Divide 2 / 2 not equal to  2", () => {
  expect(functions.divide(2, 2)).not.toBe(2);
});

test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});

test("Should be falsy", () => {
  expect(functions.checkValue(0)).toBeFalsy();
});
