const conta = {
  saldo: 100,

  debitar(valor) {
    this.saldo -= valor;
    console.log("Novo saldo:", this.saldo);
  },

  creditar(valor) {
    this.saldo += valor;
    console.log("Novo saldo:", this.saldo);
  }
};

conta.debitar(40);
conta.creditar(20);