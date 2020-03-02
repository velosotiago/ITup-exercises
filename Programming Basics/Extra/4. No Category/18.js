function orderWord(str) {
  if (str == "" || str === null) {
    return "Invalid String!";
  }

  var strArr = [];
  var numArr = [];
  for (var c = 0; c < str.length; c++) {
    if (!isNaN(str[c]) && str[c] != " ") numArr.push(str[c]);
    else strArr.push(str[c]);
  }

  strArr = BubbleSort(strArr);
  numArr = BubbleSort(numArr);

  var newStr = "";
  for (var c = 0; c < strArr.length; c++) {
    newStr += strArr[c];
  }
  for (var n = 0; n < numArr.length; n++) {
    newStr += numArr[n];
  }
  return newStr;
}

function BubbleSort(array) {
  var sorted = false;
  while (!sorted) {
    sorted = true;
    for (var i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        sorted = false;
        var aux = array[i + 1];
        array[i + 1] = array[i];
        array[i] = aux;
      }
    }
  }
  return array;
}

console.log(orderWord("hello world 123"));
