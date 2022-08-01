let n = 7;
let ar = [1, 2, 3, 1, 2, 4, 2];

const myFu = (n, ar) => {
  var res = 0;
  ar.sort();
  for (let i = 0; i < n; i++) {
    if (ar[i] == ar[i + 1]) {
      i++;
      res++;
    }
  }
  return res;
};
console.log(myFu(n, ar));
