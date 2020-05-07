function orderByLength(arr) {
  var unordered = true;
  var aux;
  while (unordered) {
    unordered = false;
    for (var i = 0; i < arr.length - 1; i++) {
      if (arr[i].length > arr[i + 1].length) {
        unordered = true;
        aux = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = aux;
      }
    }
  }
  return arr;
}

console.log(orderByLength(["Misfits", "Abba", "Celine Dion", "Of Monsters and Men", "Toto"]));