function fibonacciPos(int) {
  if (int < 0) return -1;
  if (int < 2) return int;
  var curNum = 2;
  var prevNum = 1;
  var curPos = 3;
  while (int != curNum) {
    var aux = curNum;
    curNum += prevNum;
    if (curNum > int) return -1;
    prevNum = aux;
    curPos++;
  }
  return curPos;
}

console.log(fibonacciPos(3));