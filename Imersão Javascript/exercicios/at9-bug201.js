// Atividade 9 — O bug do "205"
import { input } from '@inquirer/prompts';

const a = await input({ message: 'Primeiro valor?' });
const b = await input({ message: 'Segundo valor?' });

console.log('Soma:', a + b);

// 1) Rode e digite 20 e 5. O que apareceu? Por quê?
// 2) Conserte de DUAS formas:
//      (a) convertendo com Number(...)
//      (b) trocando input por number({ ..., required: true, step: 'any' })
// 3) Teste com 1.5 e 2.5 nas duas versões.
