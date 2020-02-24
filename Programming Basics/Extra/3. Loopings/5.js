function f(a, b) {
  var aux;
  if (a > b) {
    aux = a;
    a = b;
    b = aux;
  }
  for (var i = a; i <= b; i++) {
    console.log(i);
  }
}

f(-5, -4)