const ferrari = {
  modelo: "F40",
  velMax: 324,
};

const volvo = {
  modelo: "V40",
  velMax: 200,
};

console.log(ferrari.__proto__);
console.log(ferrari.__proto__ === Object.prototype);
console.log(volvo.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__);

// Minhas palavras - Em javascript ele acaba entendendo herança pela referencia do objeto
// Referencia essa que chama de prototipo, entao sempre que um objeto filho buscar determinado atributo
// em outro objeto, ele vai percorrendo ate encontrar, seguindo esse dilema, do filho para o pai, do pai para o pai...
