const { auto, car, dreamCar, fullName } = require('../app/object');

describe('the auto', () => {
  test('has a color', () => {
    expect(auto.color).toBeDefined();
  });
  test('has an engine key', () => {
    expect(auto).toHaveProperty('engine');
  });
  test('has no extra defined', () => {
    expect(auto.extras).toBeUndefined();
  });
  test('name is not a number', () => {
    expect(auto.doors).not.toBeNaN();
  });

  // difference between toEqual and toStrictEqual ?

  test('and the car are the same', () => {
    expect(auto).toEqual(car);
  });
  test('and the car are the same', () => {
    expect(auto).toStrictEqual(car);
  });

  test('matches my dream car', () => {
    expect(car).toMatchObject(dreamCar);
  });
});


