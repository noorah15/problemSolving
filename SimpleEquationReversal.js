function solve(eq) {
  let num = "";
  let final = [];

  for (let i = 0; i < eq.length; i++) {
    if (eq[i] >= "0" && eq[i] <= "9") {
      num += eq[i];
    } else {
      if (num != "") {
        final.push(num);
        num = "";
      }
      final.push(eq[i]);
    }
  }
  if (num != "") {
    final.push(num);
  }

  let result = "";
  final = final.reverse();

  for (let i = 0; i < final.length; i++) {
    result += final[i];
  }

  return result;
}
