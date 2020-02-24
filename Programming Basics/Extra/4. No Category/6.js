function missing(arr) {
  var missingNums = [];
  for (var i = 0; i < arr.length - 1; i++) {
    var curNum = arr[i];
    var nextNum = arr[i+1];
    if (nextNum == curNum + 1) continue;
    else {
      for (var j = curNum + 1; j < nextNum; j++) {
        missingNums.push(j);
      }
    }
  }
  return missingNums;
}

console.log(missing([-3,-2,1,5]));