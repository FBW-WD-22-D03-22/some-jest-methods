const { auto, car, dreamCar, fullName } = require('../app/object');
const autoArray = Object.keys(auto);

const wishedKeys = ['doors', 'wings'];
const notWishedKeys = ['dogs', 'cats'];

describe('an auto', () => {
  test('has 6 fields', () => {
    expect(autoArray).toHaveLength(6);
  });
  test('has a color', () => {
    expect(autoArray).toContain('color');
  });
  test('has the wished keys', () => {
    expect(autoArray).toEqual(expect.arrayContaining(wishedKeys));
  });
  test('has none of the unwished keys', () => {
    expect(autoArray).toEqual(expect.not.arrayContaining(notWishedKeys));
  });
});
