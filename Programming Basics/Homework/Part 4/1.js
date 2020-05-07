function largerThan(n, array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i].length > n) {
      console.log(array[i]);
    }
  }
}

largerThan(3, ['abba', 'dog', 'temptation']);