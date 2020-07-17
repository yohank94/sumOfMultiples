function sumArithMult(a, b) {
  if (a <= 0) {
    throw "Limit cannot be lower than 1";
  }
  if (b <= 0) {
    throw "Base cannot be lower than 1";
  }
  const upperBound = Math.floor((a-1)/b);
  return sum = b * (upperBound*(upperBound + 1)/2);
}

module.exports = sumArithMult;
