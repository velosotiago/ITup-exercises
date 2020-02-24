function f(number1, number2) {
  if (number1 > number2) {
    return -1;
  } else if (number1 == number2) {
    return 0;
  } else if (number1 < number2) {
    return 1;
  }
  return undefined;
}