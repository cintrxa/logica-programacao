const contas = [
  { cliente: "João", saldo: 100 },
  { cliente: "Maria", saldo: 50 },
  { cliente: "Pedro", saldo: 200 }
];

for (let i = 0; i < contas.length; i++) {
  contas[i].saldo -= 30;
  console.log(
    "Cliente:", contas[i].cliente,
    "| Saldo:", contas[i].saldo
  );
}


