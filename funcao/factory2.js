function criarPessoa(nome, sobrenome) {
  return {
    // name: nome -- Pode fazer isso, mas o mais indicado seria:
    nome,
    sobrenome,
    apelido: "Bob",
  };
}

console.log(criarPessoa("Gabriel", "Correia"));
