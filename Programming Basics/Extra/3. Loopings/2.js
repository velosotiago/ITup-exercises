function f(number) {
  if (number >= 0) {
    for (var i = 0; i <= number; i++) {
      console.log(i);
    }
  } else {
    console.log("No numbers to show");
  }
}

f(2);
f(0);
f(-1);
f(NaN);