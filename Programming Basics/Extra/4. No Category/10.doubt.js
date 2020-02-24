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
  do {
    var swapped = false;
    for (var i = 0; i < len; i++) {
      if (str[i] > str[i + 1]) {
        console.log(`str[i]: ${str[i]} str[i+1]: ${str[i + 1]}`);

        var aux = str[i];
        str[i] = str[i + 1];
        str[i + 1] = aux;
        swapped = true;
        
        console.log(`str[i]: ${str[i]} str[i+1]: ${str[i + 1]}`);
      }
    }
  } while (swapped)



  console.log(str);
  return str;
}

var a = "xyaabbbccccdefww";
var b = "xxxxyyyyabklmopq";
var c = "abcdefghijklmnopqrstuvwxyz";
longest(a, b);
//console.log(longest(c,c));