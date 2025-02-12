console.log('\n- A montagem da central passou por algumas alterações. Segue lista de itens que continham nela:');

var itens = [
    "Roteador",
    "Bateria",
    "Fonte bivolt-automática",
    "Placas de automação",
    "Touch",
    "Botão Liga/Desliga"
];

console.log("\n- Tendo em vista a adaptação e a redução de custos de produção, essas foram as alterações:");

var novos_itens = [
    "Botão interruptor das Placas",
    "Placas removidas"
];

itens[0] = novos_itens[0];
itens[3] = novos_itens[1];

console.log("\n- E esses são os itens que as centrais possuem agora por padrão: ");
console.log(itens);