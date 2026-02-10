function debitarSaldo(saldo, valor) {
  return saldo - valor;
}

let saldo = 100;
let compras = [30, 20, 40];

for (let i = 0; i < compras.length; i++) {
  saldo = debitarSaldo(saldo, compras[i]);
  console.log("Saldo atual:", saldo);
}

if (saldo >= 0) {
  console.log("Operações concluídas");
} else {
  console.log("Saldo negativo");
}