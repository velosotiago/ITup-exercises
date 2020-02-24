function isPalindrome(str) {
  var len = str.length;

  if (!len) {
    return true;
  }

  if (str[0] == str[len - 1]) {
    var newStr = "";
    for (var i = 1; i < len - 1; i++) {
      newStr += str[i];
    }
    return isPalindrome(newStr);
  } else {
    return false;
  }
}

console.log(isPalindrome("ABBA"));
console.log(isPalindrome("ARTRA"));
console.log(isPalindrome("CIVIC"));
console.log(isPalindrome("DAD"));
console.log(isPalindrome("LEVEL"));
console.log(isPalindrome("RADAR"));
console.log(isPalindrome("ROTATOR"));
console.log(isPalindrome("ABCCA"));
console.log(isPalindrome("ORCHID"));
