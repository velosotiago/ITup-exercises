function f(a, i, j) {
  if (a[i] > a[j]) {
    return i;
  } else if (a[i] < a[j]) {
    return j;
  } else if (a[i] == a[j]) {
    return -1;
  }
  return undefined;
}

console.log(f([1, 2, 3], 1, 2));