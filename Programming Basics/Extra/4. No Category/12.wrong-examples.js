function difference(a, b) {
  var max;
  var min;
  if (a > b) {
    max = a;
    min = b;
  } else {
    max = b;
    min = a;
  }

  return max - min;
}

function round5(num) {
  if (num % 5 == 0) return num;

  var next = num;
  var prev = num;
  while (true) {
    if (next % 5 == 0) break;
    next++;
  }
  while (true) {
    if (prev % 5 == 0) break;
    prev--;
  }

  var dprev = difference(num, prev);
  var dnext = difference(num, next);
  if (dnext < dprev) return next;
  else return prev;
}

console.log(round5(0));
console.log(round5(2));
console.log(round5(3));
console.log(round5(12));
console.log(round5(21));
console.log(round5(30));
