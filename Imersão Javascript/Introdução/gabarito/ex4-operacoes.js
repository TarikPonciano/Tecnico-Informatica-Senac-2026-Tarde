// GABARITO COMENTADO — Exercício 4: operações com números
//
// Todas as perguntas usam number() com step: 'any' (aceita decimais) e required: true
// (nunca devolve undefined). Digite os decimais com PONTO.
import { number } from '@inquirer/prompts';

// ---- (a) Média de três notas ------------------------------------------------
const n1 = await number({ message: 'Nota 1?', min: 0, max: 10, step: 'any', required: true });
const n2 = await number({ message: 'Nota 2?', min: 0, max: 10, step: 'any', required: true });
const n3 = await number({ message: 'Nota 3?', min: 0, max: 10, step: 'any', required: true });

// ATENÇÃO aos parênteses: sem eles, a divisão teria prioridade e o resultado seria
// n1 + n2 + (n3 / 3), que está errado. Some tudo primeiro e depois divida por 3.
const media = (n1 + n2 + n3) / 3;

// toFixed(1) arredonda para 1 casa, mas devolve TEXTO. Usamos só para exibir.
console.log(`Média: ${media.toFixed(1)}`);

// ---- (b) Celsius -> Fahrenheit ---------------------------------------------
const celsius = await number({ message: 'Temperatura em °C?', step: 'any', required: true });
// Fórmula: F = C * 9 / 5 + 32. A multiplicação e a divisão vêm antes da soma.
// Os parênteses em (celsius * 9) / 5 não são obrigatórios; deixam a intenção clara.
const fahrenheit = (celsius * 9) / 5 + 32;
console.log(`${celsius} °C = ${fahrenheit.toFixed(1)} °F`);

// ---- (c) IMC ----------------------------------------------------------------
const peso = await number({ message: 'Peso (kg)?', min: 1, step: 'any', required: true });
const altura = await number({ message: 'Altura (m)?', min: 0.5, max: 2.5, step: 'any', required: true });
// ** é a potência: altura ** 2 é a altura ao quadrado. A potência vem antes da divisão.
const imc = peso / altura ** 2;
console.log(`IMC: ${imc.toFixed(1)}`);

// DESAFIO: comparações devolvem true ou false; && exige que as DUAS sejam verdadeiras.
console.log('Peso normal?', imc >= 18.5 && imc < 25);

// ---- (d) Segundos -> horas, minutos e segundos -----------------------------
const total = await number({ message: 'Total de segundos?', min: 0, required: true });

// Math.floor arredonda para baixo: pega só a parte inteira da divisão.
const horas = Math.floor(total / 3600);

// total % 3600 é o RESTO depois de tirar as horas inteiras; dividindo por 60 e
// arredondando para baixo, temos os minutos.
const minutos = Math.floor((total % 3600) / 60);

// total % 60 é o resto depois de tirar os minutos inteiros: os segundos que sobram.
const segundos = total % 60;

console.log(`${total} s = ${horas}h ${minutos}min ${segundos}s`);

// Conferindo: 3661 s -> 1 hora (3600), sobram 61 -> 1 minuto (60), sobra 1 segundo.
