function isAnagram(test, original) {
  if (test.length !== original.length) return false;

  test = test.toLowerCase();
  original = original.toLowerCase();

  // convert both strings to arrays
  var testArr = test.split('');
  var originalArr = original.split('');

  // order both arrays
  var unordered = true;
  var aux;
  while (unordered) {
    unordered = false;
    for (var i = 0; i < testArr.length - 1; i++) {
      if (testArr[i] > testArr[i + 1]) {
        unordered = true;
        aux = testArr[i];
        testArr[i] = testArr[i + 1];
        testArr[i + 1] = aux;
      }
    }
  }

  unordered = true;
  while (unordered) {
    unordered = false;
    for (var i = 0; i < originalArr.length - 1; i++) {
      if (originalArr[i] > originalArr[i + 1]) {
        unordered = true;
        aux = originalArr[i];
        originalArr[i] = originalArr[i + 1];
        originalArr[i + 1] = aux;
      }
    }
  }

  // compare each element of both arrays
  for (var i = 0; i < testArr.length; i++) {
    if (testArr[i] !== originalArr[i])
      return false;
  }
  return true;
}

console.log(isAnagram("foefet", "toffee"));
console.log(isAnagram("Buckethead", "DeathCubeK"));
console.log(isAnagram("foefer", "toffee"));