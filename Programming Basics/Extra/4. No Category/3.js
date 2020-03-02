function f(str) {
  var nums = [];
  var newElem = "";
  for (var i = 0; i < str.length; i++) {
    if (str[i] == ';') {
      if (isNaN(newElem)) continue;
      else {
        nums[nums.length] = parseInt(newElem);
        newElem = "";
        continue;
      }
    }

    newElem += str[i];
  }
  
  // average
  var avg = 0;
  for (var i = 0; i < nums.length; i++) {
    avg += nums[i];
  }
  avg = (avg / nums.length).toFixed() + "";
  

  // sum of digits
  var sum = 0;
  for (var i = 0; i < avg.length; i++) {
    sum += parseInt(avg[i]);
  }

  // is divisible by 5?
  var isDiv = false;
  if (sum % 5 == 0) isDiv = true;

  return avg+","+sum+","+(isDiv+"").toUpperCase();
}

console.log(f("-500;500;1500;-;+++;;;ABC"));