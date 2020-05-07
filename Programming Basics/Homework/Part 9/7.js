function isPrime(n) {
  if (n < 2) return false;
  for (var i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function primesUpTo(n) {
  const primes = [];

  for (var i = 2; i <= n; i++) {
    if (isPrime(i)) primes[primes.length] = i;
  }

  return primes;
}

console.log(primesUpTo(71));