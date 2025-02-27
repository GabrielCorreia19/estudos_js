const pessoa = {
  nome: "Pedro",
  idade: 22,
  peso: 77,
  endereco: {
    logradouro: "Renvoa",
    numer: 44,
  },
};

const { nome, idade } = pessoa;
console.log(nome, idade);

//Também pode usar

const { nome: n, idade: i } = pessoa;
console.log(n, i);
