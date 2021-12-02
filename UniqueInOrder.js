//https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript

var uniqueInOrder = function (iterable) {
  let arr = [];

  if (iterable.length === 0) return arr;
  arr.push(iterable[0]);
  for (let i = 1; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i - 1]) arr.push(iterable[i]);
  }

  return arr;
};
