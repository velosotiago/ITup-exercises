function f(a, index) {
  if (!a.length) return undefined;
  var count = 0;
  for (var i = 0; i < a.length; i++) {
    if (a[i] == a[index]) count++;
  }
  return count;
}

console.log(f([-2, -1, -1, 4, -1, 4], 2));
console.log(f([-2, -1, -1, 4, -1, 4], 0));
console.log(f([-2, -1, -1, 4, -1, 4], -1));
console.log(f([], 1));
