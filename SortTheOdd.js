//https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript

function sortArray(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) continue;
    for (let j = i; j < array.length; j++) {
      if (array[j] % 2 === 0) continue;
      if (array[j] < array[i]) {
        let swap = array[j];
        array[j] = array[i];
        array[i] = swap;
      }
    }
  }

  return array;
}
