function isSquare(int) {
  var counter = 0;
  if (int < 0) return false;
  
  do {
    var isSquare = false;
    counter++;
    if (counter*counter == int) {
      isSquare = true;
    }
  } while (isSquare == false && counter < int);
  return isSquare;
}

console.log(isSquare (-1));
console.log(isSquare (3));
console.log(isSquare (4));
console.log(isSquare (25));
console.log(isSquare (26));