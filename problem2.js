var obj = {name : 'RajiniKanth', age : 25, hasPets : true};
function printAllValues(obj) {
  let newArray = Object.keys(obj);
  console.log(newArray);
  return newArray;
}

printAllValues(obj);
