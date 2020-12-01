let sumAllNumbers = function(array){
    let result = 0;
    array.forEach(current => {
        result = current + result;
    })
    console.log(`Odd Numbers are ${result}`);
}

sumAllNumbers([1,2,3,4,5,7,9,8,6,77,97]);