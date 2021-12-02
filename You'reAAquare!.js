var isSquare = function (n) {
  if (n < 0) return false;

  if (n === 1 || n === 0) return true;

  for (let i = 2; i < n; i++) {
    if (i * i === n) return true;
  }

  return false; // fix me
};
