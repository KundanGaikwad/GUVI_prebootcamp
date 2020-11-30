var arr = [
  ["make", "Ford"],
  ["model", "Mustang"],
  ["year", 1964],
];

function fromListToObject(arr) {
  var newObject = {};
  let key = "",
    value = "";
  arr.forEach((current) => {
    key = current[0];
    value = current[1];
    newObject[key] = value;
  });

  console.log(newObject);
  return newObject;
}

fromListToObject(arr);
