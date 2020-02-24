function contain_all_rots(str, arr) {
  var rots = [str];
  if (!str.length) return true;

  // find all rotations
  for (var i = 0; i < str.length - 1; i++) {
    const prevStr = rots[i];
    var newStr = prevStr[prevStr.length - 1];
    for (var j = 0; j < prevStr.length - 1; j++) {
      newStr += prevStr[j];
    }
    rots.push(newStr);
  }

  // check if all rotations are in passed arr
  var rotsInArr = 0;
  for (var i = 0; i < rots.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (arr[j] == rots[i]) rotsInArr++;
    }
  }
  console.log(rotsInArr);
  if (rotsInArr == rots.length) return true;
  else return false;
}

console.log(
  contain_all_rots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"])
);
console.log(
  contain_all_rots("Ajylvpy", [
    "Ajylvpy",
    "ylvpyAj",
    "jylvpyA",
    "lvpyAjy",
    "pyAjylv",
    "vpyAjyl",
    "ipywee"
  ])
);
