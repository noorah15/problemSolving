//https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript

function expandedForm(num) {
  // Your code here

  let a = [];
  let size = ("" + num).length;
  size = Math.pow(10, size - 1);
  while (num != 0) {
    a.push(num % 10);
    num = Math.floor(num / 10);
  }
  let str = "" + a[a.length - 1] * size;

  for (let i = a.length - 2; i >= 0; i--) {
    size /= 10;
    if (a[i] !== 0) str += " + " + a[i] * size;
    console.log(str);
  }

  return str;
}
