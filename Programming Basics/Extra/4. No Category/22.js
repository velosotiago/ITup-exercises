function PositionInSortedArray(arr, num) {
  let start = 0;
  let stop = arr.length - 1;
  let middle = Math.floor((start + stop) / 2);

  while (arr[middle] !== num && start < stop) {
    if (num < arr[middle]) {
      stop = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + stop) / 2);
  }
  if (arr[middle] !== num) {
    return -1;
  }
  return middle;
}