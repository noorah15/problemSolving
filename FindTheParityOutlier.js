//https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript

function findOutlier(integers) {
  let count = 0;
  let even;
  let odd;
  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 === 0) {
      even = integers[i];
      count++;
    }
    if (count === 2) break;
  }
  if (count === 1) return even;
  for (let i = 0; i < integers.length; i++) {
    if (Math.abs(integers[i]) % 2 === 1) return integers[i];
  }
}
