// GABARITO COMENTADO — Atividade 5: saudação interativa
//
// Passo 1: importar apenas as funções de pergunta que vamos usar.
import { input, number } from '@inquirer/prompts';

// Passo 2: perguntar o nome.
//   await  -> espera a pessoa digitar e apertar Enter antes de continuar.
//   input  -> pergunta de texto livre; SEMPRE devolve uma string.
//   required: true -> recusa resposta vazia.
const nome = await input({ message: 'Qual é o seu nome?', required: true });

// Passo 3: perguntar a idade.
//   number -> só aceita número e devolve um NUMBER (não texto).
//   min/max -> faixa aceita.
//   required: true -> sem isso, apertar Enter devolveria undefined.
const idade = await number({ message: 'Qual é a sua idade?', min: 0, max: 120, required: true });

// Passo 4: mostrar o resultado.
//   idade é um número de verdade, então idade + 1 é uma SOMA (20 + 1 = 21).
console.log(`Olá, ${nome}! Ano que vem você terá ${idade + 1} anos.`);

// Passo 5: conferir os tipos.
console.log('tipo do nome :', typeof nome);   // string
console.log('tipo da idade:', typeof idade);  // number

// DESAFIO: se a idade fosse lida com input, ela seria o TEXTO "20".
//   Então idade + 1 viraria a concatenação "201" (texto "20" + número 1), e não 21.
//   Para corrigir sem trocar de prompt: Number(idade) + 1.
