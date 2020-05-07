function validateSequence(arr) {
  const step = arr[1] - arr[0];
  for (var i = 1; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] !== step)
      return false;
  }
  return true;
}

console.log(validateSequence([1,2,3,4,5,6,7,8,9]));
console.log(validateSequence([1,2,3,4,5,8,7,8,9]));
console.log(validateSequence([2,4,6,8,10]));
console.log(validateSequence([1,2,4,8,16,32,64]));