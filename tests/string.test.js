const { sentence, test1, test2, test3 } = require('../app/sentence');
describe('a sentence', () => {
  test('is an string', () => {
    expect(test1).toBeTruthy();
  });
  test('is a number', () => {
    expect(test2).toBeFalsy();
  });
  test('is null', () => {
    expect(test3).toBeNull();
  });
  test('has the word "tomato" inside', () => {
    expect(sentence).toMatch(/tomato/);
  });
  test('has 30 characters', () => {
    expect(sentence).toHaveLength(30);
  });
});
