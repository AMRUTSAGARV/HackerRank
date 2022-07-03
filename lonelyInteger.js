// Given an array of integers, where all elements but one occur twice,
// find the unique element

const lonelyInt = (a) => {
  let unique = a.filter(function (value) {
    return a.indexOf(value) === a.lastIndexOf(value);
  });

  return unique[0];
};

console.log(lonelyInt([1, 2, 3, 4, 3, 2, 1]));
