// GABARITO COMENTADO — Atividade 8: preveja o resultado

console.log(7 / 2);
// 3.5 -> a divisão em JavaScript nunca é "inteira": o resultado é decimal.

console.log(7 % 3);
// 1 -> % é o RESTO da divisão. 7 = 2 x 3 + 1.

console.log(2 + 3 * 4);
// 14 -> a multiplicação vem antes da soma: 2 + (3 * 4).

console.log((2 + 3) * 4);
// 20 -> os parênteses mudam a ordem: primeiro 2 + 3, depois vezes 4.

console.log(10 - 4 - 3);
// 3 -> operadores de mesma precedência vão da esquerda para a direita: (10 - 4) - 3.
//      (E não 10 - (4 - 3), que daria 9.)

console.log(2 ** 5);
// 32 -> ** é a potência: 2 x 2 x 2 x 2 x 2.

console.log(15 % 4);
// 3 -> 15 = 3 x 4 + 3. O resto é 3.

console.log(9 / 0);
// Infinity -> dividir por zero NÃO gera erro em JavaScript: o resultado é Infinity.
//             (0 / 0 daria NaN, "Not a Number".)

let x = 10;
x += 5;   // x = x + 5   -> 15
x *= 2;   // x = x * 2   -> 30
x--;      // x = x - 1   -> 29
console.log(x);
// 29 -> cada operador composto usa o valor ATUAL de x.
