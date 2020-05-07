function difference(arr) {
  var evenSum = 0;
  var oddSum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenSum += arr[i];
    } else {
      oddSum += arr[i];
    }
  }
  const diff = evenSum - oddSum;
  if (diff >= 0) {
    return diff;
  } else {
    return -diff;
  }
}
console.log(difference([1, 2, 3, 4, 5, 6]));