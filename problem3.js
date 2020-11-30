var obj = { name: "ISRO", age: 35, role: "Scientist" };
function convertListToObject(obj) {
  let newArray = Object.entries(obj);
  console.log(newArray);
  return newArray;
}

convertListToObject(obj);
