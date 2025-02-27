// Função Literal
function literal() {}

// Armazenar em uma variável
const testeFuntcion = function () {};

// Armazenar em um array
const array = [
  function (a, b) {
    return a + b;
  },
  literal,
  testeFuntcion,
];
console.log(array[0](1, 9));

// Armazenar em um objeto
const obj = {};
obj.nome = function () {
  return "Bora Bill";
};
console.log(obj.nome());

// Passar função como parametro
function teste(fun) {
  fun();
}
teste(function () {
  console.log("Teste parametro");
});

// Uma funlçao pode retornar/conter outra função
function soma(a, b) {
  return function (c) {
    console.log(a + b + c);
  };
}
// soma(1, 1)(5);
const soma1 = soma(1, 1);
soma1(5);
