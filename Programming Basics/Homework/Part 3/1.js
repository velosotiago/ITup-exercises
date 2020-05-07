function printFrom(num) {
  var start = 0;
  var end = 0;
  if (num >= 0) {
    end = num;
  } else {
    start = num;
  }

  console.log('printing from', start, 'to', end);
  for (var i = start; i <= end; i++) {
    console.log(i);
  }
}

printFrom(0);
printFrom(2);
printFrom(-2);