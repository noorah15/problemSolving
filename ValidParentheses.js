//https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript

function validParentheses(parens) {
  let stack = [];

  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === "(") stack.push("(");
    else {
      if (stack.length === 0) return false;
      stack.length--;
    }
  }

  if (stack.length === 0) return true;
  return false;
}
