(function(array){
    let result = [];
    array.forEach(current => {
        let flag = true;
        for(let i = 0, j = current.length - 1; i != j; i++, j--){
            if(current.charAt(i) !== current.charAt(j)){
                flag = false;
                break;
            }
        }
        if(flag === true) result.push(current);
        flag = true;
    })
    console.log(`Palindromes in Array are :- ${result}`);
})(["MOM","DAD","SISTER","ABCBA"]);