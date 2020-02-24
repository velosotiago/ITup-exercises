function f(a, i) {
  if (i == 0) {
    if (a[i] <= a[i+1]) {
      return -1;
    } else if (a[i] > a[i+1]) {
      return a[i];
    }
  } else if (i == a.length - 1) {
    if (a[i] <= a[i-1]) {
      return -1;
    } else if (a[i] > a[i-1]) {
      return a[i];
    }
  }
  
  if (a[i] <= a[i+1] || a[i] <= a[i-1]) {
    return -1;
  } else if (a[i] > a[i+1] && a[i] > a[i-1]) {
    return a[i];
  }
  return undefined;
}

console.log(f([9, 2, 5, 3], 0))
console.log(f([9, 2, 5, 3], 1))
console.log(f([9, 2, 5, 3], 2))
console.log(f([9, 2, 5, 3], 3))
console.log(f([9, 2, 5, 3], -1))