import entradaDados from 'readline-sync';

console.log("Conversor de Real para Dólar: \n");

var real = entradaDados.question("Informe o valor em Reais: ");

var dolar = real * 5.86;

console.log(real+" R$ equivale a "+dolar.toFixed(2)+" $");