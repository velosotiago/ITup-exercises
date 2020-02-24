function contain_all_rots(str, a) {
  console.log(str);
  var rots = [str];
  var auxChar;
  console.log('started');
  if (!str.length) return true;

  for (var i = 0; i < str.length; i++) {
    newStr = rots[i];
    auxChar = newStr[newStr.length - 1];
    for (var j = newStr.length - 2; j >= 0; j++) {
      newStr[j + 1] = newStr[j];
    }
    newStr[0] = auxChar;
    rots.push(newStr);
  }
  return rots;
}

console.log(contain_all_rots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]));