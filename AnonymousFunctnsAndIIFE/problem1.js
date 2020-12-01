let oddNumber = function(array){
    let result = [];
    result = array.filter(current => current % 2 !== 0);
    console.log(`Odd Numbers are ${result}`);
}

oddNumber([1,2,3,4,5,7,9,8,6,77,97]);