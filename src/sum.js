function sum(a, b) {
  let counter = b;
  let sum = 0;
  while (counter < a) {
    sum += counter;
    counter += b;
  }
  return sum;
}

module.exports = sum;
