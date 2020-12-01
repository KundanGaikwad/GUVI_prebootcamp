let primeNumbersInArray = function (array) {
  let result = [];
  array.forEach((current) => {
    if (current === 2 || current === 3) {
      result.push(current);
    } else {
      let flag = true;
      for (let i = current - 1; i > 1; i--) {
        if (current % i === 0) {
          flag = false;
          break;
        }
      }
      if (flag === true) result.push(current);
      flag = true;
    }
  });
  console.log(`Prime numbers in array :- ${result}`);
};

primeNumbersInArray([2, 3, 4, 5, 6, 7, 17]);
