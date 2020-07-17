const sumArithMult = require('./sumArithMult');

test('sum of multiples of 1 when limit is 1 should equal 0', () => {
  expect(sumArithMult(1,1)).toBe(0);
});

test('sum of multiples of 5 when limit is 11 should equal 15', () => {
  expect(sumArithMult(11,5)).toBe(15);
});

test('function should throw Error when base is less than 1', () => {
  expect(() => {
    sumArithMult(11,-1)
  }).toThrow("Base cannot be lower than 1");
});

test('function should throw an error when limit is less than 1', () => {
  expect(() => {
    sumArithMult(-1, 1)
  }).toThrow("Limit cannot be lower than 1");
});
