try {
  const resultado = 10 / 0;
  console.log("Resultado:", resultado);
} catch (erro) {
  console.log("Erro capturado:", erro.message);
}