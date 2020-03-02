function saldoAtual(bal, trans) {
  var res = [];
  var curBalance = bal;
  for (var i = 0; i < trans.length; i++) {
    curBalance += trans[i];
    res[res.length] = curBalance;
  }
  return res;
}

console.log(saldoAtual(50, [30,-20,-10]))