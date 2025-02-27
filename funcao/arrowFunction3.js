let comparaComThis = function (param) {
  console.log(this === param);
};

comparaComThis(global);

const obj = {};
comparaComThis = comparaComThis.bind(obj);
comparaComThis(global);
comparaComThis(obj);

let comparaComThisArrow = (param) => console.log(this === param);
comparaComThisArrow(obj);
comparaComThisArrow(module.exports);

// Nao entendeu nada?
// A ideia é entender que o this com função normal ele está ligado ao contexto global
// E usando arrow function ele pega o contexto da função inserida, mesmo tentando passar o bind nele
