import entradaDados from 'readline-sync';

console.log("Calculadora de soma entre x e y: \n")

let x = entradaDados.question("Informe o valor de x: ")
let y = entradaDados.question("Informe o valor de y: ")

let soma = Number(x) + Number(y); //se for utilizado o sinal de + para efetuarmos o cálculo, o javascript entenderá que é para concatenar os valores, então usa-se a função Number(), para as demais operações o JS converte automaticamente as strings para numero

console.log(x+" + "+y+" = "+soma);