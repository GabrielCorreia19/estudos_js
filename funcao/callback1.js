const fabricantes = ["Mercedes", "BMW", "Porshe"];

function imprimirResultado(nome, indice) {
  console.log(`${indice + 1} - ${nome}`);
}

fabricantes.forEach(imprimirResultado);
