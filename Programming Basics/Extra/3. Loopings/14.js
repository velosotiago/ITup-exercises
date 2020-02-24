function f(a) {
  var primeFound = false;
  for (var i = 0; i < a.length; i++) {
    primeFound = isPrime(a[i]);
  }
  return primeFound;
}

function isPrime(num) {
  if (num < 2) return false;
  for (var i = 2; i < num; i++) {
    if (num % 2 == 0) return false;
  }
  return true;
}

console.log(f([-2, -1, 5, 10, 7, 21]));
console.log(f([-2, -1, -1, -1, 1, 4]));
console.log(f([]));