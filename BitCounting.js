//https://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript

var countBits = function (n) {
  let count = 0;

  while (n != 0) {
    if (n % 2 === 1) count++;
    n = Math.floor(n / 2);
  }

  return count;
};
