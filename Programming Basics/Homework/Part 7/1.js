function sumSmallerBigger(Array, Value) {
  var bigSum = 0;
  var smallSum = 0;
  for (var i = 0; i < Array.length; i++) {
    if (Array[i] > Value) {
      bigSum += Array[i];
    } else if (Array[i] < Value) {
      smallSum += Array[i];
    }
  }

  console.log(
    `bigger: ${bigSum}\nsmaller: ${smallSum}`
  );
}

sumSmallerBigger([2, 5, -1, 3, 30, 43, 8], 3)