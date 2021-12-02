//https://www.codewars.com/kata/58381907f8ac48ae070000de/train/javascript

function isLanguageDiverse(list) {
  let countPython = 0;
  let countRuby = 0;
  let countJavaScript = 0;
  list.forEach((item) => {
    if (item.language === "Python") countPython++;
    else if (item.language === "Ruby") countRuby++;
    else countJavaScript++;
  });

  console.log(countPython);
  console.log(countRuby);
  console.log(countJavaScript);

  let max = Math.max(countPython, countRuby, countJavaScript);
  console.log(max);
  if (max > countRuby * 2 || max > countJavaScript * 2 || max > countPython * 2)
    return false;

  return true;
}
