function secondGreatest(array) {
  // order array with bubble sort
  var unordered = true;
  var aux;
  while (unordered) {
    unordered = false;
    for (var i = 1; i < array.length; i++) {
      if (array[i] < array[i - 1]) {
        unordered = true;
        aux = array[i];
        array[i] = array[i - 1];
        array[i - 1] = aux;
      }
    }
  }

  // array is ordered, get second greatest
  // iterate the array to find it (the largest number may be in the array twice)
  for (let i = array.length - 2; i >= 0; i--) {
    if (array[i] !== array[i + 1]) {
      return array[i];
    }
  }
}

console.log(secondGreatest([65, 23, 37, 29, 84, 12, 84]));

