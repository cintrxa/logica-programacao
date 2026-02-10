const usuarios = [
  { nome: "Ana", ativo: true },
  { nome: "Bruno", ativo: false },
  { nome: "Carlos", ativo: true }
];

for (let i = 0; i < usuarios.length; i++) {
  console.log(
    "Usuário:", usuarios[i].nome,
    "| Ativo:", usuarios[i].ativo
  );
}