function getOrder(arr) {
  var isAsc = true;
  var isDesc = true;

  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1]) isDesc = false;
    else if (arr[i] > arr[i + 1]) isAsc = false;
  }

  if (!isDesc && !isAsc) return 'unordered';
  else if (isAsc) return 'ascending';
  return 'descending';
}

console.log(getOrder([1, 3, 2]));
console.log(getOrder([1, 2, 3]));
console.log(getOrder([3, 2, 1]));