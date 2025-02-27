// As 2 formas de driblar o this, ou usando bind ou criando a variavel self
function Pessoa() {
  this.idade = 0;

  const self = this;
  setInterval(
    function () {
      self.idade++;
      console.log(self.idade);
    } /*.bind(this)*/,
    1000
  );
}

new Pessoa();
