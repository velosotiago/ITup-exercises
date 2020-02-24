function seq(lastNum) {
  if (lastNum < 0) return lastNum + "<0";
  var sum = 0;
  var sequence = "";
  for (var i = 0; i <= lastNum; i++) {
    sum += i;
    if (i != lastNum) sequence += i + "+";
    else sequence += i;
  }
  sequence += " = " + sum;
  return sequence;
}

console.log(seq(6));
console.log(seq(-15));
console.log(seq(0));