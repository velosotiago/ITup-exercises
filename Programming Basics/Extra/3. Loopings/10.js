function f(a, b) {
  var count = 0;
  for (var i = 0; i < a.length; i++) {
    if (a[i] < 0) continue;
    for (var j = 0; j < b.length; j++) {
      if (a[i] == b[j]) {
        count++;
      }
    }
  }
  return count;
}

console.log(f([1, 2, 3], [1, 2, 4, 5]));
console.log(f([-2, -1], [-2, -1, 2]));
console.log(f([1, 2, 3], [1, 2, 3, 4, 5]));
console.log(f([-2, 1, 0], []));
