function area(largura, altura) {
  const area = largura * altura;
  if (area > 20) {
    console.log(`Área passou o valor permitido: ${area}`);
  } else {
    return area;
  }
}

console.log(area(1, 10));
console.log(area(2));
console.log(area());
console.log(area(2, 2, 1, 5, 6, 82, 1, 3)); // pega apenas os 2 primeiros numeros definidos no parametro da função
console.log(area(5, 5));
