function Pessoa(nome) {
  this.nome = nome;

  this.falar = () => {
    console.log(`Meu nome é ${nome}`);
  };
}

const joao = new Pessoa("Bob Mal");
joao.falar();
