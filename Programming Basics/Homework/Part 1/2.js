function countA(MyString) {
  MyString = MyString.toLowerCase();
  var count = 0;
  for (var i = 0; i < MyString.length; i++) {
    if (MyString[i] === 'a') {
      count++
    }
  }
  return count;
}

console.log(countA('abba'));