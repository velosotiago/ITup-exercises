function countChar(c, arr) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    const word = arr[i];
    for (var j = 0; j < word.length; j++) {
      if (word[j] === c) {
        count++;
      }
    }
  }
  return count;
}

console.log(countChar('a', ['abba', 'dog', 'temptation']));