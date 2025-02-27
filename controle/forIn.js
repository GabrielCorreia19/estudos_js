const notas = [6.66, 9.5, 7.44, 1.1];

for (let i in notas) {
  console.log(`${i}: ${notas[i]}`);
}

const pessoa = {
  nome: "Bob",
  idade: 22,
  peso: 77,
  endereco: {
    logradouro: "Renova",
    numero: 44,
  },
};

for (atributo in pessoa) {
  console.log(`${atributo}: ${pessoa[atributo]}`);
}
