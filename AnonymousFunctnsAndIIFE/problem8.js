let rotatedArray = function (array, k) {
  let result = [];
  if (k % 2 === 0) {
    return array;
  } else {
    for (let i = array.length - 1; i >= 0; i--) {
      result.push(array[i]);
    }
    return result;
  }
};

console.log(`Result is ${rotatedArray([1, 2, 3, 4, 5], 3)}`);
