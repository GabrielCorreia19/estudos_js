function Pessoa() {
  this.idade = 0;
  setInterval(() => {
    console.log("teste", this.idade++);
  }, 1000);
}

new Pessoa();
