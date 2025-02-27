// Função anônima é uma função que não tem nome
const soma = function (x, y) {
  return x + y;
};

const imprimirResultado = function (a = 1, b = 1, operacao = soma) {
  console.log(operacao(a, b));
};

imprimirResultado(3, 4);
imprimirResultado(3, 4, soma);
imprimirResultado(3, 4, function (x, y) {
  return x - y;
});
imprimirResultado(3, 4, (x, y) => x * y);
const pessoa = {
  falar: function () {
    console.log("Fala comigo caramba");
  },
};

pessoa.falar();
