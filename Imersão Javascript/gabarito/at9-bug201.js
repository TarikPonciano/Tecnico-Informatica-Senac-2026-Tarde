// GABARITO COMENTADO — Atividade 9: o bug da soma que vira concatenação
import { input, number } from '@inquirer/prompts';

// ---- O PROBLEMA -----------------------------------------------------------
// input devolve SEMPRE texto. Digitando 20 e 5, temos os textos "20" e "5".
// O operador + com textos CONCATENA (junta): "20" + "5" = "205", e não 25.
const a = await input({ message: 'Primeiro valor?' });
const b = await input({ message: 'Segundo valor?' });
console.log('Errado (concatena) :', a + b);

// ---- CORREÇÃO (a): converter com Number ---------------------------------
// Number("20") vira o número 20. Agora o + é uma soma de verdade.
console.log('Certo com Number() :', Number(a) + Number(b));

// ---- CORREÇÃO (b): usar o prompt certo ------------------------------------
// number já devolve um NÚMERO. A conversão deixa de ser necessária.
// step: 'any' é necessário para aceitar decimais como 1.5 (o padrão só aceita inteiros).
const c = await number({ message: 'Primeiro valor (number)?', step: 'any', required: true });
const d = await number({ message: 'Segundo valor (number)?', step: 'any', required: true });
console.log('Certo com number() :', c + d);

// ---- QUAL USAR? -----------------------------------------------------------
// Prefira number() sempre que a resposta for um número. Use input + Number()
// quando precisar aceitar vírgula decimal (o number() recusa "1,5").
//
// Bônus para lembrar: '5' - 3 dá 2 (o - converte para número), mas '5' + 3 dá "53".
// O + é o único operador aritmético que também concatena textos.
