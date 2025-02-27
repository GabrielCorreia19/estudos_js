// Função é um bloco de codigo nomeado
// Recebe parametros e retorna um valor

function imprimirSoma(a, b) {
  console.log(a + b);
}

function some(a, b = 1) {
  return a + b;
}

console.log(some(24, 3));
