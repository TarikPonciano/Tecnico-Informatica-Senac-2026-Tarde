// GABARITO COMENTADO — Atividade 10: pode entrar?
import { number, confirm } from '@inquirer/prompts';

// 1) Coleta. Cada prompt devolve o tipo certo para o que precisamos:
//    number -> número (idade); confirm -> boolean (true/false).
const idade = await number({ message: 'Idade?', min: 0, max: 120, required: true });
const temIngresso = await confirm({ message: 'Tem ingresso?', default: false });
const acompanhado = await confirm({ message: 'Está acompanhado(a)?', default: false });

// 2) Regras, cada uma em uma variável booleana.
//    >= é um operador de COMPARAÇÃO: devolve true ou false.
const maior = idade >= 18;

//    && é o "E": só dá true se os DOIS lados forem true.
//    || é o "OU": dá true se PELO MENOS UM lado for true.
//    Os parênteses garantem que o OU seja avaliado primeiro:
//      entra = temIngresso E (maior OU acompanhado)
//    Sem parênteses, o && teria prioridade sobre o || e o resultado seria outro.
const entra = temIngresso && (maior || acompanhado);

// 3) Exibição.
console.log('maior de idade:', maior);
console.log('entra         :', entra);

//    Operador ternário:  condição ? valorSeVerdadeiro : valorSeFalso
//    Escolhe um TEXTO com base em um boolean, sem precisar do if (próxima aula).
console.log(entra ? 'Entrada liberada' : 'Entrada barrada');

// Tabela de testes para conferir:
//   idade 20, ingresso sim, acompanhado não  -> liberada
//   idade 15, ingresso sim, acompanhado sim  -> liberada
//   idade 15, ingresso sim, acompanhado não  -> barrada
//   idade 30, ingresso não, acompanhado sim  -> barrada (sem ingresso, ninguém entra)
