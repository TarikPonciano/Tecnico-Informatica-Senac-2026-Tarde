// GABARITO COMENTADO — Atividade 11: texto e sorteio
import { input } from '@inquirer/prompts';

const nomeCompleto = await input({ message: 'Nome completo?', required: true });

// trim() remove espaços das pontas. Os métodos de texto NÃO alteram o original:
// eles devolvem um texto NOVO, por isso guardamos o resultado em outra constante.
const nome = nomeCompleto.trim();

// length é uma PROPRIEDADE (sem parênteses): quantidade de caracteres.
console.log('caracteres :', nome.length);

// toUpperCase() devolve o texto em maiúsculas.
console.log('maiúsculas:', nome.toUpperCase());

// at(0) devolve o caractere da posição 0 (a primeira). As posições começam em 0.
// Alternativa equivalente: nome.slice(0, 1).
const inicial = nome.at(0).toUpperCase();
console.log('primeira letra:', inicial);

// SORTEIO de um dado de 6 faces:
//   Math.random()            -> decimal de 0 até quase 1 (nunca chega a 1)
//   * 6                      -> decimal de 0 até quase 6
//   Math.floor(...)          -> arredonda para baixo: inteiro de 0 a 5
//   + 1                      -> inteiro de 1 a 6
const dado = Math.floor(Math.random() * 6) + 1;

console.log(`${inicial}, você tirou ${dado}!`);

// DESAFIO: número de 10 a 20 (11 valores possíveis):
//   Math.floor(Math.random() * 11) + 10
// Regra geral para sortear de MIN a MAX:
//   Math.floor(Math.random() * (MAX - MIN + 1)) + MIN
const entre10e20 = Math.floor(Math.random() * 11) + 10;
console.log('sorteio de 10 a 20:', entre10e20);
