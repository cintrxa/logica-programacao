const contas = [
  { cliente: "João", saldo: 100 },
  { cliente: "Maria", saldo: 50 },
  { cliente: "Pedro", saldo: 200 }
];

const saldoTotal = contas.reduce((total, conta) => {
  return total + conta.saldo;
}, 0);

const contasRicas = contas.filter(conta => conta.saldo >= 100);

const clientes = contas.map(conta => conta.cliente);

console.log("Saldo total:", saldoTotal);
console.log("Contas com bom saldo:", contasRicas);
console.log("Clientes:", clientes);