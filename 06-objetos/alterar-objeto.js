const conta = {
  saldo: 100,
  ativa: true
};

conta.saldo -= 30;
conta.ativa = false;

console.log("Saldo:", conta.saldo);
console.log("Ativa:", conta.ativa);