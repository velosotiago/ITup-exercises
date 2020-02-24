function ClosestToAvg(a) {
  var avg = 0;
  for (var i = 0; i < a.length; i++) {
    avg += a[i];
  }
  avg = avg/a.length;

  var closest = [];
  for (var i = 0; i < a.length; i++) {
    var max;
    var min;
    if (avg > a[i]) {
      max = avg;
      min = a[i];
    } else {
      max = a[i];
      min = avg;
    }

    if (!closest.length || closest[1] >= max - min) {
      closest = [a[i], max - min];
    }
  }
  return closest[0];
}

console.log(ClosestToAvg([1, 3, 5]));
console.log(ClosestToAvg([1, 7]));
console.log(ClosestToAvg([1, 2, 4, 5]));