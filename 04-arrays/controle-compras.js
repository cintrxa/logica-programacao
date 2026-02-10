let compras = [30, 20, 50, 10];
let saldo = 100;

for (let i = 0; i < compras.length; i++) {
  saldo -= compras[i];
  console.log("Compra:", compras[i], "Saldo restante:", saldo);
}

if (saldo >= 0) {
  console.log("Compras concluídas com sucesso");
} else {
  console.log("Saldo insuficiente");
}