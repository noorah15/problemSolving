function divisors(integer) {
  if (prime(integer)) return integer + " is prime";

  let a = [];
  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) a.push(i);
  }

  return a;
}

function prime(integer) {
  if (integer === 2 || integer === 3) return true;

  if ((integer % 2 === 0) | (integer % 3 === 0)) return false;

  for (let i = 5; i * i <= integer; i += 6) {
    if (integer % i === 0 || integer % (i + 2) === 0) return false;
  }

  return true;
}
