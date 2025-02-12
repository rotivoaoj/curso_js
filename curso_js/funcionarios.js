var funcionarios = [
    "Bárbara",
    "Carlos",
    "Helena",
    "Maria",
    "Rogério"
];

console.log(funcionarios);

// [ 'Bárbara', 'Carlos', 'Helena', 'Maria', 'Rogério' ]

var novos_funcionarios = [
    "Guilherme",
    "Jéssica",
    "Mateus",
    "João"
];

funcionarios[0] = novos_funcionarios[1];
funcionarios[4] = novos_funcionarios[0];
funcionarios[2] = novos_funcionarios[2];
funcionarios[1] = novos_funcionarios[3];

console.log(funcionarios);