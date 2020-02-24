function f(a) {
  var nums = [];
  for (var i = 0; i < a.length; i++) {
    var newNum = true;
    for (var j = 0; j < nums.length; j++) {
      if (a[i] == nums[j]) {
        newNum = false;
        break;
      }
    }
    if (newNum) {
      nums[nums.length] = a[i];
    }
  }
  return nums.length;
}

console.log(f([-2, -1, -1, -1, 4, 4]));
console.log(f([-2, -1, -1, -1, 3, 4]));
console.log(f([]));