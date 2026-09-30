// GABARITO COMENTADO — Atividade 3: apresentação
const nome = 'Ana';
const idade = 20;
const cidade = 'São Paulo';

// 1) TEMPLATE LITERAL: usa crases (`) e ${...} para colocar valores dentro do texto.
//    É a forma mais legível. Dentro de ${ } pode ir qualquer expressão (até contas).
console.log(`Olá, meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`);

// 2) CONCATENAÇÃO: junta pedaços com +. Funciona, mas é mais fácil errar espaços e aspas.
//    Repare que o número (idade) é convertido para texto automaticamente.
console.log('Olá, meu nome é ' + nome + ', tenho ' + idade + ' anos e moro em ' + cidade + '.');

// 3) VÁRIOS ARGUMENTOS: o console.log separa cada argumento com um espaço.
//    Aqui cuidamos de escrever a vírgula como parte dos textos.
console.log('Olá, meu nome é', nome + ',', 'tenho', idade, 'anos e moro em', cidade + '.');

// 4) DUAS LINHAS: a sequência \n (barra invertida + n) é uma quebra de linha.
console.log(`Olá, meu nome é ${nome}.\nTenho ${idade} anos e moro em ${cidade}.`);

// DESAFIO: console.table mostra dados em forma de tabela.
//   { nome, idade, cidade } é um atalho para { nome: nome, idade: idade, cidade: cidade }.
console.table([{ nome, idade, cidade }]);
