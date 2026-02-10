const usuarios = [
  { nome: "Ana", ativo: true },
  { nome: "Bruno", ativo: false },
  { nome: "Carlos", ativo: true }
];

const ativos = usuarios.filter(usuario => {
  return usuario.ativo;
});

console.log(ativos);