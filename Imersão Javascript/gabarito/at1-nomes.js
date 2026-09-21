// GABARITO COMENTADO — Atividade 1: nomes válidos ou inválidos?
//
// Regras para nomes de variáveis e constantes (chamados de "identificadores"):
//   • começam com uma letra, _ (sublinhado) ou $
//   • depois podem ter letras, dígitos, _ e $
//   • não podem ter espaços nem hífens
//   • não podem ser palavras reservadas (let, const, class, if...)
//   • maiúsculas e minúsculas fazem diferença: nome e Nome são nomes diferentes
//
// Este arquivo RODA: os nomes válidos estão declarados e os inválidos estão comentados,
// cada um com a mensagem de erro que o Node mostra. (Os arquivos .js desta pasta são
// módulos ES, por causa do "type": "module" no package.json; por isso algumas
// mensagens de erro são diferentes das que aparecem em outros lugares.)

let total2 = 1;
// VÁLIDO. Dígitos são permitidos, só não podem ser o PRIMEIRO caractere.

// let 2total = 1;
// INVÁLIDO. Começa com dígito.
//   Erro: SyntaxError: Unexpected strict mode reserved word
//   A mensagem é enganosa: o problema real é o nome começar com um número.

// let valor-final = 1;
// INVÁLIDO. O hífen é o operador de subtração: o JavaScript lê "valor - final".
//   Erro: SyntaxError: Unexpected token '-'
//   Use camelCase (valorFinal) ou sublinhado (valor_final).

let valorFinal = 1;
// VÁLIDO. camelCase: primeira palavra em minúscula, as demais começam com maiúscula.
// É a convenção usada em JavaScript.

let _temp = 1;
// VÁLIDO. Pode começar com sublinhado (costuma indicar um valor temporário ou "privado").

let $valor = 1;
// VÁLIDO. Pode começar com $.

// let let = 1;
// INVÁLIDO. "let" é uma palavra reservada: faz parte da sintaxe da linguagem.
//   Erro: SyntaxError: Unexpected strict mode reserved word
//   O mesmo vale para const, class, if, else, for, function, return, true, false, null...

// let nome completo = 1;
// INVÁLIDO. Espaço separa as palavras: o JavaScript lê "nome" e depois "completo".
//   Erro: SyntaxError: Unexpected identifier 'completo'
//   Use nomeCompleto.

let PI = 3.14;
// VÁLIDO. Letras maiúsculas são permitidas. Por convenção, nomes TODOS em maiúsculas
// (PI, TAXA_MAXIMA) indicam constantes "de verdade". Aqui, o ideal seria const PI.

let preço = 9.9;
// VÁLIDO, porque letras acentuadas são permitidas. Mas EVITE: acentos e "ç" dão trabalho
// na hora de digitar e podem causar problemas entre sistemas. Prefira: preco.

console.log('Válidos:', total2, valorFinal, _temp, $valor, PI, preço);
