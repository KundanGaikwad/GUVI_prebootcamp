var medianOfArray = function (arr1, arr2) {
  let M1,
    M2 = 0;
  if (arr1.length % 2 === 0) {
    let m = arr1.length / 2;
    M1 = (arr1[m] + arr1[m - 1]) / 2;
    M2 = (arr2[m] + arr2[m - 1]) / 2;
    return (M1 + M2) / 2;
  } else {
    let m = Math.round(arr1.length / 2);
    M1 = arr1[m - 1];
    M2 = arr2[m - 1];
    return (M1 + M2) / 2;
  }
};

let result = medianOfArray([1, 2, 3, 4, 4, 4], [1, 2, 4, 4, 4, 4]);
console.log(`Median of Sorted array is ${result}`);
