//While: Executa o loop enquanto a condição for verdadeira.
//Do While: Executa o loop primeiro e depois verifica a condição.
function getRandomInt(min, max) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

let opcao = 0;

while (opcao != -1) {
  opcao = getRandomInt(-1, 14);
  console.log(opcao);
}

console.log("Já foi");
