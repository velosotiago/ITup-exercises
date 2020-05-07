function primeBetween(arr) {
  const start = arr[0];
  const end = arr[1];
  const nums = [];
  
  for (var i = start; i <= end; i++) {
    if (i === 0 || i === 1) {
      nums[i] = 1;
      continue;
    }
    nums[i] = 0;
  }

  for (var i = start; i <= end; i++) {
    if (nums[i] === 0) {
      for (var j = i + i; j <= end; j += i) {
        nums[j] = 1;
      }
    }
  }

  var primes = [];
  for (var i = start; i <= end; i++) {
    if (nums[i] === 0) {
      primes.push(i);
    }
  }
  return primes;
}

console.log(primeBetween([0, 1000]))