// GABARITO COMENTADO — Atividade 7: altura com vírgula
import { input, number } from '@inquirer/prompts';

// 1) input devolve TEXTO. Se a pessoa digitar 1,75, recebemos o texto "1,75".
const texto = await input({
  message: 'Altura em metros? (ex.: 1,75)',
  // DESAFIO: validate recebe a resposta e devolve true (aceita) ou um texto (mensagem de erro).
  //   Aqui recusamos resposta vazia ou só com espaços.
  validate: (valor) => valor.trim() !== '' || 'Digite a altura',
});

// 2) Converter: o JavaScript só entende ponto como separador decimal.
//    replace(',', '.') troca a vírgula por ponto ("1,75" -> "1.75") e
//    Number(...) transforma o texto em número (1.75).
//    Sem o replace, Number('1,75') daria NaN (Not a Number).
const altura = Number(texto.replace(',', '.'));

// 3) Antes e depois da conversão.
console.log('antes :', texto, typeof texto);    // 1,75 string
console.log('depois:', altura, typeof altura);  // 1.75 number

// 4) Com number(): duas armadilhas.
//    a) Por padrão o number() só aceita INTEIROS (o step padrão é 1). Digitar 1.75
//       mostra: "Value must be a multiple of 1". Solução: step: 'any'.
//    b) A vírgula (1,75) é sempre recusada pelo number().
//    Por isso, para aceitar vírgula, usamos input + conversão (como acima).
const alturaNumber = await number({
  message: 'Altura em metros? (use ponto: 1.75)',
  min: 0.5,
  max: 2.5,
  step: 'any',
  required: true,
});
console.log('com number():', alturaNumber, typeof alturaNumber); // 1.75 number
