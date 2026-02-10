const compras = [30, 20, 50];

const total = compras.reduce((acumulador, valorAtual) => {
  return acumulador + valorAtual;
}, 0);

console.log("Total gasto:", total);