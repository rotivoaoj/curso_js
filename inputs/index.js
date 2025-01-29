import entraDados from 'readline-sync';//importando o  plugin

let nome = entraDados.question('Digite seu nome: ');//através do readline-sync, coleta o dado informado pelo usuário
console.log("Olá, " + nome);//imprime o nome digitado pelo usuário