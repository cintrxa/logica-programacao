const usuario = {
  nome: "Matheus",
  compras: [30, 20, 50],
  saldo: 120,

  processarCompras() {
    for (let i = 0; i < this.compras.length; i++) {
      this.saldo -= this.compras[i];
      console.log("Saldo atual:", this.saldo);
    }
  }
};

usuario.processarCompras();