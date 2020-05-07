function displayBiggest(arr) {
  var biggest = arr[0];
  if (arr.length > 1) {
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] > biggest) {
        biggest = arr[i];
      }
    }
  }
  console.log(biggest);
}

displayBiggest([1, -2, -3, 5, 6, -2]);