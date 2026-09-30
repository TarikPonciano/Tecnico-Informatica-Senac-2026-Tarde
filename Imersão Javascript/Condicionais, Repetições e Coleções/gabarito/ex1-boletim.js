// GABARITO COMENTADO — Exercício 1: Boletim
import { number } from '@inquirer/prompts';

const nota = await number({ message: 'Nota final?', min: 0, max: 10, step: 'any', required: true });

// As condições são testadas de cima para baixo, e a PRIMEIRA verdadeira "vence".
// Por isso não precisamos escrever "nota >= 9 && nota < 10": se chegou até aqui
// e a nota não era >= 9, ela já é menor que 9.
let conceito;
if (nota >= 9) {
  conceito = 'A';
} else if (nota >= 7) {
  conceito = 'B';
} else if (nota >= 5) {
  conceito = 'C';
} else {
  conceito = 'D';
}

console.log(`Nota ${nota} -> Conceito ${conceito}`);

// DESAFIO: o mesmo com switch (true). Cada "case" é testado como uma condição booleana;
// o switch entra no primeiro case que der true. É um truque, mas funciona bem para
// substituir uma cadeia de else if.
switch (true) {
  case nota >= 9:
    console.log('(switch) A');
    break;
  case nota >= 7:
    console.log('(switch) B');
    break;
  case nota >= 5:
    console.log('(switch) C');
    break;
  default:
    console.log('(switch) D');
}
