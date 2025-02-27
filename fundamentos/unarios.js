let num1 = 1;
let num2 = 2;

++num1;
console.log(num1);
--num1;
console.log(num1);

//Perceba que aqui ele compara e so dps chega no --
console.log(++num1 === num2--);
//Aqui ele compara e da falso porque dps de concluir o num2-- q ele identifica que nao sao iguais
console.log(num1 === num2);
