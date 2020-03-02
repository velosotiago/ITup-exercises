function compose(s1, s2) {
  var s1Lines = [];
  var s2Lines = [];
  var line = "";

  for (var i = 0; i < s1.length; i++) {
    if (i != s1.length - 1 && s1[i] == "\n") {
      s1Lines[s1Lines.length] = line;
      line = "";
      continue;
    } else if (i == s1.length - 1) {
      line += s1[i];
      s1Lines[s1Lines.length] = line;
      line = "";
      break;
    }

    line += s1[i];
  }

  for (var i = 0; i < s2.length; i++) {
    if (i != s2.length - 1 && s2[i] == "\n") {
      s2Lines[s2Lines.length] = line;
      line = "";
      continue;
    } else if (i == s2.length - 1) {
      line += s2[i];
      s2Lines[s2Lines.length] = line;
      line = "";
      break;
    }

    line += s2[i];
  }

  // Construct final string
  const numOfLines = s1Lines.length;
  for (var l = 0; l < numOfLines; l++) {
    const s1Line = s1Lines[l];
    const s2Line = s2Lines[numOfLines - 1 - l];
    const len = s1Line.length;
    for (var c = 0; c <= l; c++) {
      line += s1Line[c];
    }
    for (var c = 0; c < len - l; c++) {
      line += s2Line[c];
    }
    if (l != numOfLines-1) line += "\n";
  }
  return line;
}

const s1 = "abcd\nefgh\nijkl\nmnop";
const s2 = "qrst\nuvwx\nyz12\n3456";
console.log(compose(s1, s2));
