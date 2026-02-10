function sacar(saldo, valor) {
  if (valor > saldo) {
    throw new Error("Saldo insuficiente");
  }

  return saldo - valor;
}

try {
  const novoSaldo = sacar(100, 150);
  console.log("Novo saldo:", novoSaldo);
} catch (erro) {
  console.log("Erro:", erro.message);
}