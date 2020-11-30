var arr = [
  [
    ["firstName", "Vasanth"],
    ["lastName", "Raja"],
    ["age", 24],
    ["role", "JSWizard"],
  ],
  [
    ["firstName", "Sri"],
    ["lastName", "Devi"],
    ["age", 28],
    ["role", "Coder"],
  ],
];

function transformEmployeeData(arr) {
  var tranformEmployeeList = [];
  let key = "",
    value = "",
    tempObj = {};

  arr.forEach((current) => {
    current.forEach((current) => {
      key = current[0];
      value = current[1];
      tempObj[key] = value;
    });
    tranformEmployeeList.push(tempObj);
    tempObj = {};
  });
  console.log(tranformEmployeeList);
  return tranformEmployeeList;
}

transformEmployeeData(arr);
