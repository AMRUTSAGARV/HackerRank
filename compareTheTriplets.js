function compareTriplets(a, b) {
  let aScore = 0;
  let bScore = 0;
  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) {
      aScore += 1;
    } else {
      if (a[i] < b[i]) {
        bScore += 1;
      }
    }
  }

  let comparison_array = [aScore, bScore];
  return comparison_array;
}
console.log(compareTriplets([12, 1, 2], [8, 9, 21]));
