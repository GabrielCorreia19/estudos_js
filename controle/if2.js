// Repare esses 2 códigos com temperos de pegadinhas:
function valorTeste(num) {
  if (num > 7) console.log(`${num}`); // cade a '{', ele executa a primeira linha e outro console.log n faz parte do if
  console.log("final");
}
valorTeste(4);
valorTeste(9);

function pegadinha(num) {
  if (num > 7); // Não usar ';' em estruturas de controles
  {
    console.log(`${num}`);
  }
}

pegadinha(4);
pegadinha(9);
