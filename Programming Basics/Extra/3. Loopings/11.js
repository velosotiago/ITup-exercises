// dot product is the product of every element n of both arrays
// a.*b = a[0]*b[0] + a[1]*b[1] + a[2]*b[2] (...) a[n]*b[n]

function f(a, b) {
  var sum = 0;
  if (!a.length || !b.length) return 0;
  for (var i = 0; i < a.length; i++) {
    sum += a[i] * b[i];
  }
  return sum;
}

console.log(f([1, 1], [1, 1]));
console.log(f([1, 2, 3], [1, 2, 3]));
console.log(f([1, 2, -3], [1, 2, 3]));
console.log(f([-2, -1, 0], []));
console.log(f([], [-2, -1, 0]));
