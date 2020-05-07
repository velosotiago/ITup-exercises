function isValid(ip) {
  // create an array with each number of ip
  var nums = ip.split('.');
  
  if (nums.length !== 4) return false;

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] < 0 || nums[i] > 255) return false;
  }
  return true;
}

console.log(isValid("1.1.1.1"));
console.log(isValid("127.0.0.1"));
console.log(isValid("255.255.255.255"));
console.log(isValid("1444.23.9"));
console.log(isValid("153.500.234.444"));
console.log(isValid("-12.344.43.11"));