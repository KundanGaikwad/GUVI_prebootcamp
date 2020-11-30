var arr = ["GUVI", "I", "am", "a geek"];
function transformFirstAndLast(arr) {
  let key = arr[0];
  let value = arr[arr.length - 1];
  let newObject = {
    [key]: value,
  };
  console.log(newObject);
  return newObject;
}

transformFirstAndLast(arr);
