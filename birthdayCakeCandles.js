// You are in charge of the cake for a child's birthday.
// You have decided the cake will have one candle for each year of their total age.
//  They will only be able to blow out the tallest of the candles.
// Count how many candles are tallest.
function birthdayCakeCandles(candles) {
  var maxHeight = Math.max(...candles);
  var maxHeightCount = 0;
  for (let i = 0; i < candles.length; i++) {
    if (candles[i] == maxHeight) {
      maxHeightCount = maxHeightCount + 1;
    }
  }
  console.log(maxHeightCount);
  return maxHeightCount;
}
console.log(birthdayCakeCandles([4, 4, 1, 3]));
