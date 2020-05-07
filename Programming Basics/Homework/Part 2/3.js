function round(num) {
  const integer = Math.floor(num);
  const decimal = num - integer;

  if (decimal >= 0.5) {
    return integer + 1;
  } else {
    return integer;
  }
}

console.log(round(23.918));
console.log(round(23.458));