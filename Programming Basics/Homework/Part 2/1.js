function greatest3(a, b, c) {
  var greatest = a;
  if (b > greatest) {
    greatest = b;
  }
  if (c > greatest) {
    greatest = c;
  }
  return greatest;
}

console.log(greatest3(4, 5, 1));
console.log(greatest3(8, 5, 1));
console.log(greatest3(4, 5, 9));