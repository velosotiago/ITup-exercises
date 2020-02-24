function f(a) {
  if (!a.length) {
    console.log("Empty");
  } else {
    for (var i = 0; i < a.length; i++) {
      if ((a[i] % 2 == 0 || a[i] > 0) && a[i] != 0) {
        console.log(a[i]);
      }
    }
  }
}

f([]);
