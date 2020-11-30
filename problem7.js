var expected = { foo: 7, bar: 6 };
var actual = { foo: 5, bar: 6 };

function assertObjectsEqual(actual, expected, testName) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log(`Passed`);
  } else {
    console.log(
      `Failed [${testName}] Expected ${Object.entries(
        expected
      )}, but got ${Object.entries(actual)}`
    );
  }
}

assertObjectsEqual(actual, expected, `detects that two objects are equal`);
