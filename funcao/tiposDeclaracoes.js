console.log(soma(10, 10)); // Info importante: Perceba que imprimir a função antes de ser declarada
// e mesmo assim deu certo. Nesse tipo de declaração é possível isso (function declaration).

// function declaration
function soma(x, y) {
  return x + y;
}

// function expression
// Já aqui não funciona, deve ser chamada só depois da função.
const sub = function (x, y) {
  return x - y;
};

console.log(sub(10, 2));

// named function expression
// Aqui também não funciona, só depois
const mult = function mult(x, y) {
  return x * y;
};
console.log(mult(10, 1));
