function primes(start, end) {
  let arr = [];
  for (let i = start; i <= end; i++) {
    let prime = true;
    if (i <= 1) prime = false;
    if (i % 2 === 0 && i !== 2) prime = false;
    if (i % 3 === 0 && i !== 3) prime = false;

    for (let j = 5; j * j <= i; j += 6) {
      if (i % j === 0 || i % (j + 2) === 0) prime = false;
    }

    if (prime) arr.push(i);
  }
  if (arr.length === 0) return null;
  return arr;
}
