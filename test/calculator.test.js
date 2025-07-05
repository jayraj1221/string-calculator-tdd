const add = require('../src/calculator');

describe("String Calculator", () => {
  test('returns 0 for an empty string', () => {
    expect(add("")).toBe(0);
  });

  test('returns the number itself when a single number is provided', () => {
    expect(add("5")).toBe(5);
  });

  test('returns the sum of two comma-separated numbers', () => {
    expect(add("1,2")).toBe(3);
  });

  test('returns the sum of multiple comma-separated numbers', () => {
    expect(add("1,2,3,4")).toBe(10);
  });

  test('returns the sum when newlines and commas are used as delimiters', () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test('supports custom delimiter defined in format //;\n1;2', () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  test('throws an exception when negative numbers are present', () => {
    expect(() => add("1,-2,-4")).toThrow("negative numbers not allowed -2,-4");
  });

  test('supports multi-character custom delimiter using //[***]\\n format', () => {
    expect(add("//[***]\n1***2***3")).toBe(6);
    expect(add("//[abc]\n4abc5abc6")).toBe(15);
  });
});
