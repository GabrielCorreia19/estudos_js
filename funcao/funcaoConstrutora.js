function Carro(velocidadeMax = 200, delta = 5) {
  // atributo privado
  let velocidadeAtual = 0;
  // informação importante - para tornar privado,
  // usar consta/let ou var

  //metódo público
  this.acelerar = function () {
    // Para tornar público, usar 'this'
    if (velocidadeAtual + delta <= velocidadeMax) {
      velocidadeAtual = velocidadeAtual + delta;
    } else {
      velocidadeAtual = velocidadeMax;
    }
  };

  this.getVelocidadeAtual = function () {
    return velocidadeAtual;
  };
}

const uno = new Carro();
uno.acelerar();
console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(150, 1);
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());
