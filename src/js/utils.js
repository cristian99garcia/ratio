function userFriendlyNumber(num) {
  return Math.round((num + Number.EPSILON) * 100) / 100;
}

Math.gcd = function(a, b) {
  return b ? Math.gcd(b, a % b) : a;
}

Math.simplifyFraction = function(numerator, denominator) {
  let gcd = Math.gcd(numerator, denominator);
  return [numerator / gcd, denominator / gcd];
}
