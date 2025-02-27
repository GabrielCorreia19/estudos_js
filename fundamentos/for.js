/* 
    Exemplo de var e let, perceba que no exemplo abaixo ele exibe do 1 ao 9 dentro do for e depois diz que
    i = 0. */
// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }

// console.log("i=", i);

// Exemplo de let, perceba que no exemplo abaixo ele agora exibe do 1 ao 9 dentro do for
// e depois dar erro pois nao reconhece o i
for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.log("i=", i);
