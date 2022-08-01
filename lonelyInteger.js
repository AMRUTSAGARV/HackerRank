// Given an array of integers, where all elements but one occur twice,
// find the unique element

const lonelyInt = (a) => {
  let uniqueGuy = a.filter((v, i) => a.indexOf(v) === a.lastIndexOf(v));

  return uniqueGuy;
};

console.log(lonelyInt([-1, 2, 5, 6, 2, 9, -1, 6, 5, -1, 3]));
