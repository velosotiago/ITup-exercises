function isPrime(n) {
  if (n === 1 || n < 0) return false;

  for (i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function totalEvensIsPrime(arr) {
  var evenCount = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) evenCount++;
  }

  return isPrime(evenCount);
}

console.log(totalEvensIsPrime([1, 2, 4, 5, 6, 8]));