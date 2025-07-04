const add = require('../src/calculator');

test('returns 0 for an empty string', () => {
  expect(add("")).toBe(0);
});

test('returns the number itself when a single number is provided', () => {
  expect(add("5")).toBe(5);
});

test('returns the sum of two comma-separated numbers', () => {
  expect(add("1,2")).toBe(3);
});
