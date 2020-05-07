function avg(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

console.log(avg([1, 3, 5]));
console.log(avg([1, 7]));