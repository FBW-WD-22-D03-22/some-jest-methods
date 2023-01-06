const { a, b, c, d, sum } = require('../app/numberLogic');
const { fullName } = require('../app/object');

describe(`the numbers ${b} and ${d}`, () => {
  test('are equal', () => {
    expect(b).toEqual(d);
  });
  test(`${c} to be smaller than ${b}`, () => {
    expect(c).toBeGreaterThan(d);
  });
  test(`${b} to be smaller than ${c}`, () => {
    expect(b).toBeLessThan(c);
  });
  test(`${b} to be smaller than or equal to ${d}`, () => {
    expect(b).toBeGreaterThanOrEqual(d);
  });
  test(`${b} to be smaller than or equal to ${d}`, () => {
    expect(b).toBeLessThanOrEqual(d);
  });
});

describe('a sum adds properly a + b values', () => {
  test('adding works sanely with decimals', () => {
    expect(sum(1, 2)).toBe(3);
  });
});

describe('a driver', () => {
  test('must have a full name', () => {
    expect(fullName()).toBeDefined();
  });
});

test('adding works sanely with decimals', () => {
  expect(0.2 + 0.1).toBeCloseTo(0.3, 5);
});
