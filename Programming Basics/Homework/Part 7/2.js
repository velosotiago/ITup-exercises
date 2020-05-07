function avgBigger(Array, Value) {
  var sum = 0;
  for (var i = 0; i < Array.length; i++) {
    sum += Array[i];
  }
  const avg = sum / Array.length;
  if (avg > Value) return true;
  return false;
}

console.log(avgBigger([1, 3, 5], 2));
console.log(avgBigger([1, 3, 5], 3));