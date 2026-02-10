const usuarios = [
  { nome: "Ana", ativo: true },
  { nome: "Bruno", ativo: false },
  { nome: "Carlos", ativo: true }
];

for (let i = 0; i < usuarios.length; i++) {
  if (usuarios[i].ativo) {
    console.log("Ativo:", usuarios[i].nome);
  }
}


