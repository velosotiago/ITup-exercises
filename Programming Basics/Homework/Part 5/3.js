function sumDiff(arr) {
  var posSum = 0;
  var negSum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      posSum += arr[i];
    } else {
      negSum += arr[i];
    }
  }
  
  const diff = posSum - negSum;
  if (diff >= 0) {
    return diff;
  } else {
    return -diff;
  }
}

console.log(sumDiff([1, -2, -3, 5, 6, -2]));