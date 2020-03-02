function evenOdd(arr) {
  var res = [0, 0]
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) res[0]++;
    else res[1]++;
  }
  return res;
}

console.log(evenOdd([1,2,3,4,5]));