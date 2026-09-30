// GABARITO COMENTADO — Exercício 1: corrija os erros
//
// O arquivo original tinha 5 problemas. Erros de SINTAXE são detectados ANTES de o
// programa rodar (por isso aparecem um de cada vez, na ordem do arquivo). Erros de
// EXECUÇÃO só aparecem quando a linha problemática é executada.
//
// Original (com erros)                 Mensagem do Node                       Correção
// ---------------------------------------------------------------------------------------------
// let 1nota = 8;                       SyntaxError: Unexpected strict mode    nota1
//                                      reserved word (enganosa: o nome não
//                                      pode começar com dígito)
// let nota2 = 9,5;                     SyntaxError: Unexpected number         9.5 (ponto decimal)
// const escola = 'IFSP';               TypeError: Assignment to constant      let escola
// escola = 'USP';                      variable.                              (const não muda)
// console.log(NomeAluno, nota2);       ReferenceError: NomeAluno is not       nomeAluno
//                                      defined                                (maiúsculas importam)
//
// Como ler uma mensagem de erro: 1) o nome do erro (SyntaxError, TypeError...);
// 2) o texto explicando; 3) o arquivo e a linha, mostrados acima do erro.

const nomeAluno = 'Ana';

let nota1 = 8;        // CORRIGIDO: nomes de variáveis não podem começar com dígito.
let nota2 = 9.5;      // CORRIGIDO: em JavaScript o separador decimal é o PONTO.

let escola = 'IFSP';  // CORRIGIDO: como o valor muda logo abaixo, precisa ser let (não const).
escola = 'USP';

// CORRIGIDO: o nome da constante é nomeAluno (com "n" minúsculo).
console.log(nomeAluno, nota1, nota2, escola);
