//to get rid of all matching adjacent chracters.
function superReducedString(s) {
  // Write your code here
  let output = s.split("");
  for (let i = 0; i < output.length; i++) {
    if (output[i] === output[i + 1]) {
      output.splice(i, 2);
      i = -1;
    }
  }
  return output.length === 0 ? "Empty string" : output.join("");
}
