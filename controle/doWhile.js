//While: Executa o loop enquanto a condição for verdadeira.
//  Do While: Executa o loop primeiro e depois verifica a condição.
function getRandomInt(min, max) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

let opcao = -1;

do {
  opcao = getRandomInt(-1, 10);
  console.log(opcao);
} while (opcao != -1);

console.log("Já foi");
