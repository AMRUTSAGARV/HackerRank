// Sample Input

// 5
// AAAA
// BBBBB
// ABABABAB
// BABABA
// AAABBB
// Sample Output

// 3
// 4
// 0
// 0
// 4

let s = "AAABABABAB";

function alternatingCharacters(s) {
  s = s.split("");
  const N = s.length;
  let res = 0;
  for (let i = 0; i < N - 1; i++) {
    if (s[i] === s[i + 1]) {
      res++;
    }
  }
  return res;
}
console.log(alternatingCharacters(s));
