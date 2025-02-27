console.log(typeof console);

const obj1 = {};
obj1.nome = "Bola";
// obj1["nome"] = "bola2"; é a mesma coisa de passar o atributo ao objeto de maneira dinamica

function Obj(nome) {
  this.nome = nome; // tornar publico
}

const obj2 = new Obj("cadeira");
const obj3 = new Obj("Mesa");
console.log(obj2.nome);
console.log(obj3);
