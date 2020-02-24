function f(a, b) {
  var sumOfA = 0;
  var sumOfB = 0;

  for (var i = 0; i < a.length; i++) {
    sumOfA += a[i];
  }

  for (var i = 0; i < b.length; i++) {
    sumOfB += b[i];
  }

  if (sumOfA == sumOfB) return true;
  return false;
}

console.log(f([1, 1], [1, 1]));
console.log(f([1, 2, 3], [2, 2, 1, 1]));
console.log(f([1, 2, -3], [-1, -2, 3]));
console.log(f([-2, -1, 0], []));
console.log(f([], [-2, -1, 0]));