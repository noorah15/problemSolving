//https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript

//return the total number of smiling faces in the array
function countSmileys(arr) {
  //:) :D ;-D :~)

  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i].includes(":)") ||
      arr[i].includes(":D") ||
      arr[i].includes(";-D") ||
      arr[i].includes(":~)") ||
      arr[i].includes(":-)") ||
      arr[i].includes(";~D") ||
      arr[i].includes(";D") ||
      arr[i].includes(";)") ||
      arr[i].includes(";~)") ||
      arr[i].includes(":-D") ||
      arr[i].includes(":~D") ||
      arr[i].includes(";-)")
    )
      count++;
  }

  return count;
}
