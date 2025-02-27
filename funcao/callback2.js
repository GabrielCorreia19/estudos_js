// Sem callback
const notas = [2, 3.55, 6.66, 9.5, 7.44, 1.1, 9];

const notasBaixas1 = [];
for (let i in notas) {
  if (notas[i] < 7) {
    notasBaixas1.push(notas[i]);
  }
}

console.log(notasBaixas1);

// Com callback
const notasBaixas2 = notas.filter((nota) => nota < 7);
console.log(notasBaixas2);
