function saudacao() {
  console.log("Olá, bem-vindo!");
}

saudacao();

function somar(a, b) {
  console.log("Resultado:", a + b);
}

somar(10, 20);
somar(5, 7);

function calcularTroco(dinheiro, preco) {
  if (dinheiro >= preco) {
    return dinheiro - preco;
  } else {
    return null;
  }
}

let troco = calcularTroco(100, 70);

if (troco !== null) {
  console.log("Compra realizada. Troco:", troco);
} else {
  console.log("Saldo insuficiente");
}