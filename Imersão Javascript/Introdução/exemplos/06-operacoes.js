// Operações com as informações: números, conversões, comparações, lógica, texto e Math.
console.log('--- aritméticos ---');
console.log(7 + 2, 7 - 2, 7 * 2, 7 / 2, 7 % 2, 2 ** 10);   // 9 5 14 3.5 1 1024
console.log(2 + 3 * 4, (2 + 3) * 4, 10 - 2 - 3, 2 ** 3 ** 2);   // 14 20 5 512

let pontos = 10;
pontos += 5;  console.log(pontos);   // 15
pontos -= 3;  console.log(pontos);   // 12
pontos *= 2;  console.log(pontos);   // 24
pontos /= 4;  console.log(pontos);   // 6
pontos++;     console.log(pontos);   // 7
pontos--;     console.log(pontos);   // 6

console.log('--- conversões ---');
console.log(Number('42'), Number('12px'), parseInt('12px'), parseFloat('3.14abc'));   // 42 NaN 12 3.14
console.log(String(42), Boolean(''), Boolean('0'), +'5');   // 42 false true 5
console.log(Number(''), Number(' 12 '), Number(true), Number(null), Number(undefined));   // 0 12 1 0 NaN
console.log('5' + 3, '5' - 3, '10' > '9', Number('10') > Number('9'));   // 53 2 false true

console.log('--- comparações e lógica ---');
const idade = 20;
const temDocumento = true;
console.log(5 > 3, 5 <= 3, 5 === '5', 5 == '5', 0 == false, 'a' < 'b');   // true false false true true true
console.log(idade >= 18 && temDocumento, idade < 18 || !temDocumento, !(idade >= 18));   // true false false
console.log('' || 'sem apelido', 0 ?? 10, idade >= 18 ? 'adulto' : 'menor');   // sem apelido 0 adulto

console.log('--- strings ---');
const s = 'JavaScript';
console.log(s.length, s.toUpperCase(), s.slice(0, 4), s.indexOf('S'));   // 10 JAVASCRIPT Java 4
console.log(s.includes('Script'), s.replace('Java', 'Type'), s.at(-1));   // true TypeScript t
console.log('Olá' + ' ' + 'mundo', 'ab'.repeat(3), '  oi  '.trim());   // Olá mundo ababab oi

console.log('--- Math ---');
console.log(Math.round(2.5), Math.floor(3.9), Math.ceil(3.1), Math.trunc(-3.7));   // 3 3 4 -3
console.log(Math.max(3, 9, 4), Math.min(3, 9, 4), Math.abs(-5), Math.sqrt(16), Math.PI);
console.log('dado:', Math.floor(Math.random() * 6) + 1);

console.log('--- precisão ---');
console.log(0.1 + 0.2, (0.1 + 0.2).toFixed(2), 7 / 0, 0 / 0, NaN === NaN);
