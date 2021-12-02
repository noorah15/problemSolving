//https://www.codewars.com/kata/54bb6ee72c4715684d0008f9/train/javascript

function solution(number) {
  let sum = 0;
  for (let i = 3; i < number; i++) {
    console.log(sum);
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  return sum;

  // ...
}
