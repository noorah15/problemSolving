//https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript

function isPangram(string) {
  const mySet1 = new Set();
  for (let i = 0; i < string.length; i++) {
    if (string[i].toUpperCase() <= "Z" && string[i].toUpperCase() >= "A")
      mySet1.add(string[i].toUpperCase());
  }

  if (mySet1.size === 26) return true;
  return false;
}

/*

------------------------------------------
arr
------------------------------------------
arr[i].includes("1")
arr.join(' ')


------------------------------------------
string
------------------------------------------
string.toUpperCase()



------------------------------------------
set
------------------------------------------
const mySet1 = new Set()
 mySet1.add(" ")
 mySet1.size

*/
