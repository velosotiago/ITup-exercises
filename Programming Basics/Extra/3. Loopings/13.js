function f(a, number) {
  var newArr = [];
  if (!a.length) return undefined;
  for (var i = 0; i < a.length; i++) {
    if (a[i] * number < 0) newArr.push(a[i] * number);
  }
  return newArr;;
}

console.log(f([-2, -1, -1, 4, -1, 4], 2));
console.log(f([-2, -1, -1, 4, -1, 4], -1));
console.log(f([], 1));