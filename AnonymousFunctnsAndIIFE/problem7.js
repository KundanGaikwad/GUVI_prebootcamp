//The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.  
(function(array){
    let result = array.filter((current, index) => {
        console.log(`for ${current} index is ${array.indexOf(current)}`);
        return array.indexOf(current) === index;
    });
    console.log(`Result after removing duplicate is ${result}`);
})([1, 2, 1, 3, 4, 5, 2]);


