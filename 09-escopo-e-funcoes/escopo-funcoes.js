const saldo = 100;

function sacar(valor) {
  const novoSaldo = saldo - valor;
  return novoSaldo;
}

console.log(sacar(30));
// console.log(novoSaldo); // erro