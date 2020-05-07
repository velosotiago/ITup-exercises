function lowerNeighbors(arr) {
  var lower = [];

  if (arr[0] < arr[1]) lower.push(arr[0]);

  for (var i = 1; i < arr.length - 1; i++) {
    if (arr[i] < arr[i - 1] && arr[i] < arr[i + 1])
      lower.push(arr[i]);
  }


  if (arr[arr.length - 1] < arr[arr.length - 2])
    lower.push(arr[arr.length - 1]);
  
  return lower;
}

console.log(lowerNeighbors([1, 2, 9, 2, 8, 3]));