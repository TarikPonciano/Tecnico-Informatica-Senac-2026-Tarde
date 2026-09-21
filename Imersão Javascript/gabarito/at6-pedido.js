// GABARITO COMENTADO — Atividade 6: pedido de lanche
import { confirm, select, checkbox } from '@inquirer/prompts';

// 1) select: o usuário escolhe UMA opção da lista.
//    Cada opção é um objeto com:
//      name  -> o texto que aparece na tela
//      value -> o que a função DEVOLVE (aqui, um número: o preço)
//    Por isso "tamanho" será um number, sem precisar converter.
const tamanho = await select({
  message: 'Tamanho do lanche?',
  choices: [
    { name: 'Pequeno (R$ 15)', value: 15 },
    { name: 'Médio (R$ 20)', value: 20 },
    { name: 'Grande (R$ 25)', value: 25 },
  ],
});

// 2) checkbox: o usuário marca VÁRIAS opções (espaço marca, Enter confirma).
//    Devolve uma lista (array) com os "value" das opções marcadas.
const adicionais = await checkbox({
  message: 'Adicionais?',
  choices: [
    { name: 'Bacon', value: 'bacon' },
    { name: 'Queijo extra', value: 'queijo' },
    { name: 'Ovo', value: 'ovo' },
  ],
});

// 3) confirm: pergunta de sim ou não; devolve um boolean (true ou false).
//    default: false -> apertar só Enter significa "não".
const paraViagem = await confirm({ message: 'É para viagem?', default: false });

// 4) Resumo, cada item com o seu tipo.
console.log('\n--- Resumo do pedido ---');
console.log('tamanho     :', tamanho, `(${typeof tamanho})`);       // number
console.log('adicionais  :', adicionais, `(array? ${Array.isArray(adicionais)})`); // array
console.log('para viagem :', paraViagem, `(${typeof paraViagem})`); // boolean

// Por que o array mostra typeof "object"?  Em JavaScript, listas são um tipo de objeto.
// Para saber se algo é lista, usamos Array.isArray(valor). Veremos arrays na próxima aula.
