function gcd(a, b) {
  var min;
  var max;

  if (a < b) {
    min = a;
    max = b;
  } else {
    min = b;
    max = a;
  }

  var diff = max - min;
  if (diff == min) return min;
  else return gcd(min, diff);
}

console.log(gcd(8, 4));
console.log(gcd(21, 15));