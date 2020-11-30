var obj = { name: "RajiniKanth", age: 33, hasPets: false };
function printAllValues(obj) {
  let newArray = Object.values(obj);
  console.log(newArray);
  return newArray;
}

printAllValues(obj);
