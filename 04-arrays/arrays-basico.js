let precos = [10, 25, 40, 60];

console.log(precos);

console.log("Primeiro preço:", precos[0]);
console.log("Segundo preço:", precos[1]);
console.log("Último preço:", precos[3]);

precos.push(80);
console.log("Após adicionar:", precos);

precos.pop();
console.log("Após remover:", precos);

for (let i = 0; i < precos.length; i++) {
  console.log("Preço:", precos[i]);
}