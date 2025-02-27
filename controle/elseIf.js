Number.prototype.entre = function (inicio, fim) {
  return this >= inicio && this <= fim;
};

function imprimirNota(nota) {
  if (nota.entre(9, 10)) {
    console.log(`Miserável = ${nota}`);
  } else if (nota.entre(7, 8)) {
    console.log(`Boa = ${nota}`);
  } else if (nota.entre(4, 6)) {
    console.log(`Bora que ainda dá ${nota}`);
  } else if (nota.entre(1, 3)) {
    console.log(`Ai voce me fudeu pai ${nota}`);
  } else {
    console.log(`Nada ${nota}`);
  }
}

imprimirNota(7);
imprimirNota(9);
imprimirNota(10);
imprimirNota(4);
imprimirNota(6);
imprimirNota(1);
imprimirNota(2312);
