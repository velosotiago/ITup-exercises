function f(a) {
  if (!a.length) {
    console.log("Empty");
  } else {
    for (var i = 0; i < a.length; i++) {
      console.log(a[i]);
    }
  }
}

f([])