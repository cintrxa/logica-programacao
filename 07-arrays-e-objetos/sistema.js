const sistema = {
  usuarios: [
    { nome: "Ana", ativo: true },
    { nome: "Bruno", ativo: false }
  ],

  listarAtivos() {
    for (let i = 0; i < this.usuarios.length; i++) {
      if (this.usuarios[i].ativo) {
        console.log(this.usuarios[i].nome);
      }
    }
  }
};

sistema.listarAtivos();
