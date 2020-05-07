function lengthSum(strArray) {
  var sum = 0;
  for (var i = 0; i < strArray; i++) {
    console.log(strArray[i]);
    sum += strArray[i].length;
  }
  return sum;
}

lengthSum(["abba", "dog", "temptation"])
//console.log(lengthSum(["abba", "dog", "temptation"]));