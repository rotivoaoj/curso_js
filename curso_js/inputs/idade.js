import entradaDados from 'readline-sync';

let idade = entradaDados .question('Digite a idade que voca tem/fara esse ano: ');
console.log("Você tem "+idade+" anos de idade");

var ano_atual = '2025'; //a variavel ano_atual armazena o valor fixo de 2025

var ano_nascimento = (ano_atual - idade); //para calcularmos o ano de nascimento do usuário, utilizamos o valor armazenado em ano_atual e subtraímos pela idade digitada pelo usuário

console.log("Você nasceu no ano de " + ano_nascimento);