function isPalindrome(x) {
  x = x.toLowerCase();

  let s = Math.floor(x.length / 2);

  for (let i = 0; i < s; i++) {
    if (x[i] !== x[x.length - i - 1]) return false;
  }
  return true;
}

isPalindrome("aba");
isPalindrome("abc");
