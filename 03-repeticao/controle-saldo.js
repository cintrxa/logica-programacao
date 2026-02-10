let saldo = 100;
let gastos = [20, 30, 10, 50];

for (let i = 0; i < gastos.length; i++) {
  saldo -= gastos[i];

  if (saldo <= 0) {
    console.log("Saldo esgotado");
    break;
  }

  console.log("Saldo atual:", saldo);
}