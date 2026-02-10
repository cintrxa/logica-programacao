let dinheiro = 100;
let preco = 120;

if (dinheiro >= preco) {
  console.log("Comprou");
  let sobra = dinheiro - preco;
  console.log("Sobrou:", sobra);
} else {
  console.log("Não pode comprar");
  console.log("Não sobra nada");
}
