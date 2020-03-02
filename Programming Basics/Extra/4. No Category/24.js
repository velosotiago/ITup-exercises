function BinarySearch(list, value) {
  let start = 0;
  let stop = list.length - 1;
  let middle = Math.floor((start + stop) / 2);

  while (list[middle] !== value && start < stop) {
    if (value < list[middle]) {
      stop = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + stop) / 2);
  }
  if (list[middle] !== value) {
    return -1;
  }
  return middle;
}

function charValues(str) {
  const alpha = "abcdefghijklmnopqrstuvxwyz";
  var sum = 0;
  for (var c = 0; c < str.length; c++) {
    sum += BinarySearch(alpha, str[c]) + 1;
  }
  return sum;
}

console.log(charValues('palindrome'));