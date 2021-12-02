//https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript

function order(words) {
  let arr = words.split(" ");
  let finalRes = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes("1")) finalRes.push(arr[i]);
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes("2")) finalRes.push(arr[i]);
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes("3")) finalRes.push(arr[i]);
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes("4")) finalRes.push(arr[i]);
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes("5")) finalRes.push(arr[i]);
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes("6")) finalRes.push(arr[i]);
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes("7")) finalRes.push(arr[i]);
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes("8")) finalRes.push(arr[i]);
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes("9")) finalRes.push(arr[i]);
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes("0")) finalRes.push(arr[i]);
  }

  return finalRes.join(" ");
}

/*

------------------------------------------
arr
------------------------------------------
arr[i].includes("1")
arr.join(' ')


*/
