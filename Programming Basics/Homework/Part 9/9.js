function isPerfect(n) {
  var sum = 1;
  for (i = 2; i < n; i++) {
    if (n % i === 0) sum += i;
  }

  if (sum === n) return true;
  return false;
}

console.log(isPerfect(28));