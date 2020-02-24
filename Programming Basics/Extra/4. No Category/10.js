function longest(s1, s2) {
  var str = s1 + s2;
  str = removeDuplicates(str);
  str = sort(str);
  return str;
}

function removeDuplicates(str) {
  var foundChars = [];
  var newStr = "";
  for (var i = 0; i < str.length; i++) {
    if (foundChars == []) {
      newStr += str[i];
      foundChars[foundChars.length] = str[i];
    } else {
      var newChar = true;
      for (var j = 0; j < foundChars.length; j++) {
        if (str[i] == foundChars[j]) {
          newChar = false;
        }
      }
      if (newChar) {
        newStr += str[i];
        foundChars[foundChars.length] = str[i];
      }
    }
  }
  return newStr;
}

function sort(str) {
  const len = str.length;
  var swapped;
  var charArr = [];
  for (var i = 0; i < len; i++) {
    charArr.push(str[i]);
  }
  
  do {
    swapped = false;
    for (var i = 0; i < len - 1; i++) {
      if (charArr[i] > charArr[i + 1]) {
        var aux = charArr[i];
        charArr[i] = charArr[i + 1];
        charArr[i + 1] = aux;
        swapped = true;
      }
    }
  } while (swapped);

  str = "";
  for (var i = 0; i < len; i++) {
    str += charArr[i];
  }

  return str;
}

var a = "xyaabbbccccdefww";
var b = "xxxxyyyyabklmopq";
var c = "abcdefghijklmnopqrstuvwxyz";
console.log(longest(a, b));
console.log(longest(c,c));
