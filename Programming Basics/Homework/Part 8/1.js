function isPrime(n) {
  if (n === 1 || n < 0) return false;

  for (i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function nextPrime(n) {
  var i = n;
  while (true) {
    i++;
    if (isPrime(i)) {
      return i;
    }
  }
}

console.log(nextPrime(124817));