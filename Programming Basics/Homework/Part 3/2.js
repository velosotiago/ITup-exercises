function sumFrom(num) {
  var start = 0;
  var end = 0;
  if (num >= 0) {
    end = num;
  } else {
    start = num;
  }

  var sum = 0;
  console.log('printing from', start, 'to', end);
  for (var i = start; i <= end; i++) {
    console.log(i);
    sum += i;
  }
  return sum;
}

console.log('sum', sumFrom(0));
console.log('sum', sumFrom(2));
console.log('sum', sumFrom(-2));