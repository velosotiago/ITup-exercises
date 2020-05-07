function isPrime(n) {
  if (n < 2) return false;
  for (var i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function firstNPrimes(n) {
  var foundPrimes = [];
  var i = 2;
  while (foundPrimes.length < n) {
    if (isPrime(i)) {
      foundPrimes[foundPrimes.length] = i;
    }
    i++;
  }
  return foundPrimes;
}

console.log(firstNPrimes(5))