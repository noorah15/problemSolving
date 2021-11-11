function highestRank(arr) {
  arr = arr.sort();

  let count = 0;
  let num = arr[0];
  let max = arr[0];
  let maxCount = 1;
  for (let i = 1; i < arr.length; i++) {
    if (num == arr[i]) {
      count++;
    } else {
      if (maxCount < count) {
        maxCount = count;
        max = num;
      }
      num = arr[i];
      count = 1;
    }
    console.log(arr);
  }

  return max;
}
