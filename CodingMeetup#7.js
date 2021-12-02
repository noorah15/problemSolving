//https://www.codewars.com/kata/582887f7d04efdaae3000090/train/javascript

function findSenior(list) {
  // thank you for checking out the Coding Meetup kata :)

  const arr = [];

  let max = 0;
  list.forEach((item) => {
    if (item.age > max) max = item.age;
  });

  list.forEach((item) => {
    if (item.age === max) arr.push(item);
  });

  return arr;
}
