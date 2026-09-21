// GABARITO COMENTADO — Exercício 3: cadastro com vários tipos de prompt
//
// Objetivo: perceber que a FUNÇÃO escolhida define o TIPO do dado que volta.
import { input, number, confirm, select, checkbox, password } from '@inquirer/prompts';

// 1) input -> string. required: true recusa resposta vazia.
const nome = await input({ message: 'Nome completo?', required: true });

// 2) number -> number. min/max limitam a faixa. required: true evita undefined.
const idade = await number({ message: 'Idade?', min: 0, max: 120, required: true });

// 3) number com DECIMAIS. Por padrão o number() só aceita inteiros (step padrão = 1).
//    step: 'any' libera qualquer decimal. Lembre: digite com PONTO (1.75), a vírgula é recusada.
const altura = await number({ message: 'Altura (m)?', min: 0.5, max: 2.5, step: 'any', required: true });

// 4) confirm -> boolean. default: true significa que apertar só Enter vale "sim".
const novidades = await confirm({ message: 'Deseja receber novidades?', default: true });

// 5) select -> o "value" da opção escolhida. Aqui os values são NÚMEROS (preços),
//    então "plano" chega como number, pronto para fazer contas depois.
const plano = await select({
  message: 'Plano?',
  choices: [
    { name: 'Básico (R$ 0)', value: 0 },
    { name: 'Padrão (R$ 29,90)', value: 29.9 },
    { name: 'Premium (R$ 59,90)', value: 59.9 },
  ],
});

// 6) checkbox -> lista (array) dos values marcados. Com uma lista simples de textos,
//    o texto é o próprio value.
const interesses = await checkbox({
  message: 'Interesses?',
  choices: ['música', 'esportes', 'tecnologia'],
});

// 7) password -> string, com os caracteres escondidos (mask mostra o símbolo escolhido).
const senha = await password({ message: 'Senha?', mask: '*' });

// Exibição. padEnd alinha os rótulos; `(${typeof ...})` usa template literal.
console.log('\n--- Cadastro ---');
console.log('nome'.padEnd(11), nome, `(${typeof nome})`);
console.log('idade'.padEnd(11), idade, `(${typeof idade})`);
console.log('altura'.padEnd(11), altura, `(${typeof altura})`);
console.log('novidades'.padEnd(11), novidades, `(${typeof novidades})`);
console.log('plano'.padEnd(11), plano, `(${typeof plano})`);

// Uma lista tem typeof "object". Para saber se é lista usamos Array.isArray.
console.log('interesses'.padEnd(11), interesses, `(array: ${Array.isArray(interesses)})`);

// DESAFIO: não mostramos a senha em si, e sim um asterisco por caractere.
console.log('senha'.padEnd(11), '*'.repeat(senha.length), `(${typeof senha})`);
