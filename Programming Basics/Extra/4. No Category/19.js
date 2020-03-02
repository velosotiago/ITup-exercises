function zebulansNightmare(str) {
  var words = [];
  var newWord = "";
  for (var c = 0; c < str.length; c++) {
    if (c == str.length-1) {
      newWord += str[c];
    }

    if (str[c] == '_' || c == str.length-1) {
      words[words.length] = newWord;
      newWord = "";
    }
    else newWord += str[c];
  }
  
  var newStr = words[0];
  for (var w = 1; w < words.length; w++) {
    newStr += words[w][0].toUpperCase() + words[w].slice(1);
  }
  return newStr;
}

console.log(zebulansNightmare('is_not_done'));