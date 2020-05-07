function isPrime(n) {
  if (n < 0) {
    return -1;
  }

  if (n === 1) {
    return 0;
  }

  for (var i = 2; i < n; i++) {
    if (n % i === 0) {
      return 0;
    }
  }

  return 1;
}

console.log(isPrime(9));