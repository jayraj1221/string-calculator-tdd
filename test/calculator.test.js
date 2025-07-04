const add = require('../src/calculator');

test('returns 0 for an empty string', () => {
  expect(add("")).toBe(0);
});
