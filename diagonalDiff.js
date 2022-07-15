function diagonalDifference(arr) {
  // Write your code here
  let result = [0, 0];
  for (let i = 0; i < arr.length; i++) {
    let a = arr[i][0 + i],
      b = arr[i][arr.length - 1 - i];
    result = [result[0] + a, result[1] + b];
  }
  return Math.abs(result[0] - result[1]);
}

console.log(
  diagonalDifference([
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
  ])
);
