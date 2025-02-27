const pessoa = { nome: "Bob" };
pessoa.nome = "Pedro";
console.log(pessoa);

Object.freeze(pessoa);
pessoa.nome = "Binho";
pessoa.endereco = "Boca do rio";
delete pessoa.nome;

console.log(pessoa.nome);
console.log(pessoa);

const pessoaConstante = Object.freeze({ nome: "Joao" });
pessoaConstante.nome = "Bill";
console.log(pessoaConstante);
