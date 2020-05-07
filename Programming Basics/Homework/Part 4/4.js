function isEven(n) {
  const nString = n + '';
  const lastDigit = nString[nString.length - 1];
  if (
    lastDigit === '0' ||
    lastDigit === '2' ||
    lastDigit === '4' ||
    lastDigit === '6' ||
    lastDigit === '8'
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(0));
console.log(isEven(3));
console.log(isEven(-4));
console.log(isEven(-5));