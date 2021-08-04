var isPowerOfTwo = function(n) {
  return n > 0 && (n & (n - 1)) === 0;
};
var isPowerOfTwo2 = function(n) {
  const BIG = 1 << 30;
  return n > 0 && BIG % n === 0;
};
