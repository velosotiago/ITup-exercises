function f(a) {
  var count = 0;
  for (var i = 0; i < a.length; i++) {
    var isPrime = true;
    if (a[i] < 2) {
      isPrime = false;
    } else {
      for (var j = 2; j < a[i]; j++) {
        if (a[i] % j == 0) {
          isPrime = false;
          break;
        }
      }
    }
    if (isPrime) count++;
  }
  return count;
}

console.log(f([-2, -1, 5, 10, 7, 21]));
console.log(f([-2, -1, -1, -1, 1, 4]));
console.log(f([]));