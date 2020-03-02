function PositionInArray(arr, num) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == num) return i;
  }
  return -1;
}