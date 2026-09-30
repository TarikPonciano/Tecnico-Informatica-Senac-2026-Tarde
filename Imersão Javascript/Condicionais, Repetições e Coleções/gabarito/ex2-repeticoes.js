// GABARITO COMENTADO — Exercício 2: Repetições na prática

// (a) FizzBuzz
// A ORDEM dos testes importa: teste primeiro "múltiplo dos dois" (15), senão o de
// 3 sozinho já "rouba" a vez antes de chegar no de 5.
console.log('--- FizzBuzz ---');
for (let i = 1; i <= 30; i++) {
  if (i % 15 === 0) console.log('FizzBuzz');
  else if (i % 3 === 0) console.log('Fizz');
  else if (i % 5 === 0) console.log('Buzz');
  else console.log(i);
}

// (b) Soma dos múltiplos de 3 ou 5 abaixo de 100
// || (OU): basta ser múltiplo de um dos dois para entrar na soma.
// Não precisamos nos preocupar em "duplicar" os múltiplos de 15: cada número do
// laço é somado no MÁXIMO uma vez, porque é um único if.
let soma = 0;
for (let i = 1; i < 100; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    soma += i;
  }
}
console.log('--- soma dos múltiplos de 3 ou 5 ---');
console.log(soma); // 2318

// (c) Número primo
// Testamos os divisores de 2 até a raiz quadrada de n (não precisa ir até n: se não
// achou divisor até a raiz, não vai achar depois). break sai assim que encontra um
// divisor, porque já teria a resposta. Ainda não vimos função: fazemos com uma
// variável de controle (ehPrimo) que começa true e vira false se achar um divisor.
const numero = 29;
let ehPrimo = numero >= 2; // 0 e 1 não são primos
for (let divisor = 2; divisor * divisor <= numero; divisor++) {
  if (numero % divisor === 0) {
    ehPrimo = false;
    break; // já sabemos que não é primo, não precisa continuar testando
  }
}
console.log('--- número primo ---');
console.log(`${numero} é primo? ${ehPrimo}`);
