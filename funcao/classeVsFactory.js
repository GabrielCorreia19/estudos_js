// Usando Classe
class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    return console.log(`Meu nome é ${this.nome}`);
  }
}

const bob = new Pessoa("Bob");
bob.falar();

// Factory
const criarPessoa = (nome) => {
  return {
    falar: () => console.log(`Meu nome é ${nome}`),
  };
};

const entendeuVei = criarPessoa("booooooooob");
entendeuVei.falar();
