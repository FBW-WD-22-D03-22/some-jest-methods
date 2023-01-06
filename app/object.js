const auto = {
  color: 'red',
  engine: 'v8',
  doors: 4,
  extras: undefined,
  wings: 0,
  name: 'Fjord',
};

const car = {
  color: 'red',
  engine: 'v8',
  doors: 4,
  extras: undefined,
  wings: 0,
  name: 'Fjord',
};

const dreamCar = {
  color: 'red',
  doors: 4,
};

const driver = {
  firstName: 'John',
  lastName: 'Doe',
};

const fullName = (firstName, lastName) => {
  return this.firstName + ' ' + this.lastName;
};

module.exports = { auto, car, dreamCar, fullName };
