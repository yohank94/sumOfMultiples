const sum = require('./sum');

test('sum of multiples of 1 when limit is 1 should equal 0', () => {
  expect(sum(1,1)).toBe(0);
});

test('sum of multiples of 5 when limit is 11 should equal 15', () => {
  expect(sum(11,5)).toBe(15);
});
