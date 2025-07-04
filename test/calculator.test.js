const add = require('../src/calculator');

test('returns 0 for an empty string', () => {
  expect(add("")).toBe(0);
});

test('returns the number itself when a single number is provided', () => {
  expect(add("5")).toBe(5);
});
