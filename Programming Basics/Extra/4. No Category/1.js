function Median(a) {
  var res;
  if (a.length % 2 == 0) {
    res = (a[a.length / 2] + a[a.length / 2 - 1]) / 2;
  } else {
    res = a[a.length / 2 - 0.5];
  }

  return res;
}

console.log(Median([-1, 3, 20]));
console.log(Median([-1, 4, 20, 21]));
console.log(Median([-1, 4, 21, 30]));
console.log(Median([-1, 4, 5, 20]));