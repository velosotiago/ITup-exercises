function sumOfLowest(arr) {
  var lowest = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < lowest) {
      lowest = arr[i];
    }
  }
  var secondLowest;
  if (lowest == arr[0]) secondLowest = arr[1];
  else secondLowest = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < secondLowest && arr[i] != lowest) {
      secondLowest = arr[i];
    }
  }

  return lowest + secondLowest;
}

console.log(sumOfLowest([19,5,42,2,77]));
console.log(sumOfLowest([10,343445353,3453445,3453545353453]));