function rand() {
  return Math.random() * 2 - 1;
}

function isInsideCircle(x, y) {
  return x * x + y * y < 1;
}

function calcPi(numOfThrows) {
  var inCircle = 0;
  var throws = 0;

  while (throws < numOfThrows) {
    var x = rand();
    var y = rand();
    if (isInsideCircle(x, y)) {
      inCircle++;
    }
    throws++;
  }

  return 4 * (inCircle / throws);
}

console.log(calcPi(1000000));