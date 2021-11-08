const fizzBuzz = (n) => {
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      let str = "";
      if (i % 3 == 0) str += "fizz";
      if (i % 5 == 0) str += "buzz";
      console.log(str);
    } else console.log(i);
  }
};

fizzBuzz(15);
