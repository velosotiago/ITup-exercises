function f(a, index) {
  if (a[index] > 0) {
    return 1;
  } else if (a[index] == 0) {
    return 0;
  } else if (a[index] < 0) {
    return -1;
  }
  return undefined;
}