// Regras básicas da linguagem em um só arquivo.
// Isto é um comentário de uma linha: o Node ignora.

/* Este é um comentário
   de várias linhas. */

const nome = 'Ana';          // toda instrução termina com ;
let total = 10 + 5;          // let: valor que pode mudar
total = total + 1;           // reatribuição

// Maiúsculas e minúsculas fazem diferença: nome e Nome são coisas diferentes
const Nome = 'Bia';
console.log(nome, Nome, total);   // Ana Bia 16

// Nomes válidos: letras, dígitos, _ e $ (mas não começam com dígito)
let _rascunho = 1;
let $preco = 9.9;
let nomeCompleto = 'Ana Souza';   // camelCase é a convenção
console.log(_rascunho, $preco, nomeCompleto);

// Tipagem dinâmica: a variável aceita valores de tipos diferentes
let valor = 42;
console.log(typeof valor);        // number
valor = 'quarenta e dois';
console.log(typeof valor);        // string
valor = true;
console.log(typeof valor);        // boolean

// let sem valor vale undefined
let semValor;
console.log(semValor);            // undefined
