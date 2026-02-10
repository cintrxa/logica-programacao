function buscarUsuario(id) {
  if (!id) {
    throw new Error("ID não informado");
  }

  return { id, nome: "Matheus" };
}

try {
  const usuario = buscarUsuario();
  console.log(usuario);
} catch (erro) {
  console.log("Erro na requisição:", erro.message);
}