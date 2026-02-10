function cadastrarUsuario(nome) {
  if (!nome) {
    throw new Error("Nome é obrigatório");
  }

  console.log("Usuário cadastrado:", nome);
}

try {
  cadastrarUsuario("");
} catch (erro) {
  console.log("Erro:", erro.message);
}