function isPrime(n) {
  if (n === 1 || n < 0) return false;

  for (i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function prevPrime(n) {
  var i = n;
  while (i > 2) {
    i--;
    if (isPrime(i)) {
      return i;
    }
  }
  return -1;
}

console.log(prevPrime(2));