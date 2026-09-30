# Lista de exercícios — Revisão geral

**Senac · Prof. Tarik Ponciano**
Cobre tudo visto até aqui: sintaxe e tipos, exibição, coleta de dados, operações, condicionais, repetições, arrays e objetos.

> Esta lista é diferente das listas de questões de cada aula (que têm formato de quiz, com previsão de saída). Aqui os exercícios são para **escrever programas**, do mais simples ao mais completo. Veja também o arquivo de **briefings de projetos** — são versões ainda maiores destes mesmos temas, pensadas para duplas.

## Como usar

1. Crie um arquivo por exercício (por exemplo, `ex-a1.js`) numa pasta com a biblioteca `@inquirer/prompts` instalada (copie a pasta `node_modules` de uma das aulas, ou rode `npm install @inquirer/prompts` numa pasta nova).
2. Tente resolver **sem olhar** a solução (está ao final do arquivo, depois de cada enunciado).
3. Teste com mais de um valor de entrada — os exemplos indicam o que se espera com os valores dados, mas um programa só está pronto quando funciona com outros valores também.

Níveis: **[B]** básico · **[I]** intermediário · **[D]** desafio.

---

## Parte 1 — Sintaxe, tipos e exibição

**E1 [B]** Crie três constantes — `nomeCurso` (texto), `cargaHoraria` (número) e `temCertificado` (booleano) — e mostre os três numa única frase, usando template literal.

**E2 [B]** Mostre a tabela abaixo usando `padEnd`/`padStart` (sem bibliotecas):

```
Item        Preço
Mouse      R$ 80,00
Teclado   R$ 150,00
```

**E3 [I]** Dado `const preco = 1999.9`, mostre esse valor de três formas: com `toFixed(2)`, no padrão brasileiro (`toLocaleString('pt-BR')`) e como moeda (`currency: 'BRL'`). Explique por que a primeira forma não deveria ser usada para continuar fazendo contas.

**E4 [D]** Escreva um "recibo" formatado (use `console.table` OU alinhamento manual) para os produtos: `[{ nome: 'Caneta', preco: 3.5 }, { nome: 'Caderno', preco: 22.9 }]`, mostrando cada preço em reais e o total ao final.

---

## Parte 2 — Coleta de dados

**E5 [B]** Pergunte o nome e a idade de uma pessoa (`input`/`number`) e mostre "Olá, `<nome>`! Você nasceu por volta de `<ano atual - idade>`." (use `new Date().getFullYear()` para o ano atual).

**E6 [I]** Pergunte um valor em reais (`number`, com decimais) e a forma de pagamento (`select`: Pix, Cartão, Boleto). Mostre uma mensagem diferente conforme a forma escolhida (por exemplo, Pix ganha 5% de desconto).

**E7 [I]** Pergunte três hobbies com `checkbox` (invente as opções) e mostre quantos foram escolhidos e a lista, cada um em uma linha.

**E8 [D]** Pergunte um e-mail com `input` e `validate`, recusando qualquer texto que não tenha `@` **e** um `.` depois dele.

---

## Parte 3 — Operações

**E9 [B]** Converta uma temperatura de Celsius para Fahrenheit e de volta para Celsius, mostrando que o resultado bate com o valor original (dentro do razoável, por causa de arredondamento).

**E10 [B]** Calcule quantas notas de R$ 50, R$ 20, R$ 10 e moedas de R$ 1 são necessárias para dar um troco de R$ 187 (só usando `Math.floor` e `%`).

**E11 [I]** Dado um valor em segundos, mostre quantos dias, horas, minutos e segundos ele representa (por exemplo, 90.061 segundos = 1 dia, 1 hora, 1 minuto e 1 segundo).

**E12 [D]** Calcule a área e o perímetro de um retângulo e de um círculo (peça as medidas com `number`). Mostre os resultados com 2 casas decimais.

---

## Parte 4 — Condicionais

**E13 [B]** Peça um número e diga se ele é positivo, negativo ou zero.

**E14 [B]** Peça a idade de uma pessoa e classifique: até 12 = "Criança", até 17 = "Adolescente", até 59 = "Adulto", 60 ou mais = "Idoso".

**E15 [I]** Peça três números e mostre o maior dos três, sem usar `Math.max` (só com `if`/`else if`).

**E16 [I]** Peça o dia do mês e o mês (número de 1 a 12) e diga a estação do ano no Brasil (aproxime: Verão = dez–mar, Outono = mar–jun, Inverno = jun–set, Primavera = set–dez). Use `switch` para o mês combinado com `if` para o dia, se quiser refinar as transições.

**E17 [D]** Peça três lados de um triângulo (`number`) e diga se ele é **equilátero** (todos iguais), **isósceles** (dois iguais) ou **escaleno** (todos diferentes) — e se os lados sequer formam um triângulo válido (a soma de quaisquer dois lados deve ser maior que o terceiro).

---

## Parte 5 — Repetições

**E18 [B]** Mostre todos os números pares de 2 a 50.

**E19 [B]** Peça um número `n` e mostre a soma de 1 até `n` (com `for`).

**E20 [I]** Peça uma palavra e mostre se ela é um palíndromo (lê-se igual de trás para frente, ex.: "arara"). Dica: percorra a palavra comparando o primeiro e o último caractere, andando para o centro.

**E21 [I]** Gere os 10 primeiros números da sequência de Fibonacci (cada número é a soma dos dois anteriores: 0, 1, 1, 2, 3, 5, 8...).

**E22 [D]** Peça uma senha repetidamente (padrão sentinela) até a pessoa acertar uma senha fixa no código (ex.: `"senac123"`), mostrando "Senha incorreta, tente de novo" a cada erro e contando quantas tentativas foram feitas.

---

## Parte 6 — Arrays e objetos

**E23 [B]** Dado `const compras = [45, 120, 30, 89, 15, 200]`, mostre: o total gasto, a compra mais cara, a compra mais barata e quantas compras foram acima de R$ 50.

**E24 [I]** Dado `const palavras = ['ana', 'bola', 'rio', 'sol', 'estrela']`, mostre só as palavras com mais de 3 letras.

**E25 [I]** Dado um array com números repetidos (`[3, 1, 4, 1, 5, 9, 2, 6, 5]`), mostre uma lista **sem repetições** (dica: `[...new Set(array)]`).

**E26 [I]** Dado `const vendas = [{ produto: 'A', valor: 100 }, { produto: 'B', valor: 250 }, { produto: 'A', valor: 50 }]`, monte um objeto com o total vendido de cada produto (`{ A: 150, B: 250 }`).

**E27 [D]** Dado `const pessoas = [{ nome: 'Ana', idade: 15 }, { nome: 'Bia', idade: 22 }, { nome: 'Caio', idade: 17 }]`, monte um relatório com: nomes dos menores de idade, a idade média do grupo e a pessoa mais velha (objeto completo, não só o nome).

---

## Parte 7 — Integrados (juntando tudo)

**E28 [D] Cadastro de veículos.** Cadastre veículos (padrão sentinela): placa (`input`), ano (`number`) e tipo (`select`: Carro, Moto, Caminhão). Classifique cada um como "Novo" (ano ≥ 2020) ou "Usado". No final, mostre quantos de cada tipo e quantos são novos.

**E29 [D] Pesquisa de satisfação.** Colete respostas (padrão sentinela): nota de 0 a 10 (`number`) e um comentário opcional (`input`, pode ficar em branco). Classifique cada nota como "Detrator" (0–6), "Neutro" (7–8) ou "Promotor" (9–10) — isso é o NPS, usado de verdade em empresas. Ao final, mostre a distribuição e o NPS (% promotores − % detratores).

**E30 [D] Este é o maior:** veja os **briefings de projetos** (arquivo em PDF) para três desafios completos — Matrícula da Escola de Idiomas, Boletim do Semestre e Carrinho de Compras — que juntam coleta, condicionais, repetições e coleções num único programa, com regras de negócio e relatório final.

---

# Soluções e comentários

## Parte 1

**E1.**
```js
const nomeCurso = 'Desenvolvimento de Sistemas';
const cargaHoraria = 1200;
const temCertificado = true;
console.log(`O curso ${nomeCurso} tem ${cargaHoraria}h e certificado: ${temCertificado}`);
```

**E2.**
```js
console.log('Item'.padEnd(10) + 'Preço'.padStart(10));
console.log('Mouse'.padEnd(10) + 'R$ 80,00'.padStart(10));
console.log('Teclado'.padEnd(10) + 'R$ 150,00'.padStart(10));
```

**E3.** `(1999.9).toFixed(2)` → `"1999.90"` (texto, ponto decimal). `toLocaleString('pt-BR')` → `"1.999,9"`. Com `currency: 'BRL'` → `"R$ 1.999,90"`. `toFixed` não deve ser usado para continuar calculando porque devolve **texto**: somar `"1999.90" + 10` concatenaria em vez de somar.

**E4.**
```js
const produtos = [{ nome: 'Caneta', preco: 3.5 }, { nome: 'Caderno', preco: 22.9 }];
const brl = { style: 'currency', currency: 'BRL' };
for (const { nome, preco } of produtos) {
  console.log(nome.padEnd(12) + preco.toLocaleString('pt-BR', brl).padStart(12));
}
const total = produtos.reduce((t, p) => t + p.preco, 0);
console.log('Total'.padEnd(12) + total.toLocaleString('pt-BR', brl).padStart(12));
```

## Parte 2

**E5.**
```js
import { input, number } from '@inquirer/prompts';
const nome = await input({ message: 'Nome?', required: true });
const idade = await number({ message: 'Idade?', min: 0, required: true });
const anoNascimento = new Date().getFullYear() - idade;
console.log(`Olá, ${nome}! Você nasceu por volta de ${anoNascimento}.`);
```

**E6.**
```js
import { number, select } from '@inquirer/prompts';
const valor = await number({ message: 'Valor (R$)?', min: 0, step: 'any', required: true });
const pagamento = await select({ message: 'Pagamento?', choices: ['Pix', 'Cartão', 'Boleto'] });
const total = pagamento === 'Pix' ? valor * 0.95 : valor;
console.log(`Total a pagar (${pagamento}): R$ ${total.toFixed(2)}`);
```

**E7.**
```js
import { checkbox } from '@inquirer/prompts';
const hobbies = await checkbox({
  message: 'Hobbies?',
  choices: ['Leitura', 'Games', 'Esportes', 'Música', 'Culinária'],
});
console.log(`Você escolheu ${hobbies.length} hobbies:`);
for (const h of hobbies) console.log(`- ${h}`);
```

**E8.**
```js
import { input } from '@inquirer/prompts';
const email = await input({
  message: 'E-mail?',
  validate: (v) => (v.includes('@') && v.indexOf('.', v.indexOf('@')) > -1) || 'E-mail inválido',
});
console.log(email);
```

## Parte 3

**E9.**
```js
const celsius = 25;
const fahrenheit = (celsius * 9) / 5 + 32;
const voltaCelsius = ((fahrenheit - 32) * 5) / 9;
console.log(celsius, '->', fahrenheit, '->', voltaCelsius); // 25 -> 77 -> 25
```

**E10.**
```js
let resto = 187;
const de50 = Math.floor(resto / 50); resto %= 50;
const de20 = Math.floor(resto / 20); resto %= 20;
const de10 = Math.floor(resto / 10); resto %= 10;
const moedas = resto;
console.log(de50, de20, de10, moedas); // 3 1 1 7  (3x50 + 1x20 + 1x10 + 7 moedas = 187)
```

**E11.**
```js
const total = 90061;
const dias = Math.floor(total / 86400);
const horas = Math.floor((total % 86400) / 3600);
const minutos = Math.floor((total % 3600) / 60);
const segundos = total % 60;
console.log(`${dias}d ${horas}h ${minutos}min ${segundos}s`); // 1d 1h 1min 1s
```

**E12.**
```js
import { number } from '@inquirer/prompts';
const largura = await number({ message: 'Largura?', step: 'any', required: true });
const altura = await number({ message: 'Altura?', step: 'any', required: true });
console.log('Área do retângulo:', (largura * altura).toFixed(2));
console.log('Perímetro:', (2 * (largura + altura)).toFixed(2));

const raio = await number({ message: 'Raio do círculo?', step: 'any', required: true });
console.log('Área do círculo:', (Math.PI * raio ** 2).toFixed(2));
console.log('Perímetro (circunferência):', (2 * Math.PI * raio).toFixed(2));
```

## Parte 4

**E13.**
```js
const n = -5;
if (n > 0) console.log('positivo');
else if (n < 0) console.log('negativo');
else console.log('zero');
```

**E14.**
```js
const idade = 17;
let faixa;
if (idade <= 12) faixa = 'Criança';
else if (idade <= 17) faixa = 'Adolescente';
else if (idade <= 59) faixa = 'Adulto';
else faixa = 'Idoso';
console.log(faixa); // Adolescente
```

**E15.**
```js
const a = 7, b = 12, c = 9;
let maior;
if (a >= b && a >= c) maior = a;
else if (b >= a && b >= c) maior = b;
else maior = c;
console.log(maior); // 12
```

**E16.**
```js
const mes = 1; // janeiro
let estacao;
switch (mes) {
  case 12: case 1: case 2: estacao = 'Verão'; break;
  case 3: case 4: case 5: estacao = 'Outono'; break;
  case 6: case 7: case 8: estacao = 'Inverno'; break;
  default: estacao = 'Primavera';
}
console.log(estacao); // Verão
```

**E17.**
```js
const a = 5, b = 5, c = 8;
if (a + b <= c || a + c <= b || b + c <= a) {
  console.log('Não forma um triângulo válido');
} else if (a === b && b === c) {
  console.log('Equilátero');
} else if (a === b || b === c || a === c) {
  console.log('Isósceles');
} else {
  console.log('Escaleno');
}
// 5, 5, 8: 5+5=10 > 8 (válido); a===b -> Isósceles
```

## Parte 5

**E18.**
```js
for (let i = 2; i <= 50; i += 2) console.log(i);
```

**E19.**
```js
import { number } from '@inquirer/prompts';
const n = await number({ message: 'Até qual número?', min: 1, required: true });
let soma = 0;
for (let i = 1; i <= n; i++) soma += i;
console.log(soma); // n=100 -> 5050
```

**E20.**
```js
import { input } from '@inquirer/prompts';
const palavra = (await input({ message: 'Palavra?' })).toLowerCase();
let ehPalindromo = true;
for (let i = 0; i < palavra.length / 2; i++) {
  if (palavra[i] !== palavra[palavra.length - 1 - i]) {
    ehPalindromo = false;
    break;
  }
}
console.log(ehPalindromo);
```

**E21.**
```js
const fib = [0, 1];
for (let i = 2; i < 10; i++) {
  fib.push(fib[i - 1] + fib[i - 2]);
}
console.log(fib); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```

**E22.**
```js
import { input } from '@inquirer/prompts';
const SENHA_CORRETA = 'senac123';
let tentativas = 0;
let senha;
do {
  senha = await input({ message: 'Senha?' });
  tentativas++;
  if (senha !== SENHA_CORRETA) console.log('Senha incorreta, tente de novo.');
} while (senha !== SENHA_CORRETA);
console.log(`Acesso liberado em ${tentativas} tentativa(s).`);
```

## Parte 6

**E23.**
```js
const compras = [45, 120, 30, 89, 15, 200];
console.log('Total:', compras.reduce((s, v) => s + v, 0)); // 499
console.log('Mais cara:', Math.max(...compras)); // 200
console.log('Mais barata:', Math.min(...compras)); // 15
console.log('Acima de 50:', compras.filter((v) => v > 50).length); // 3
```

**E24.**
```js
const palavras = ['ana', 'bola', 'rio', 'sol', 'estrela'];
console.log(palavras.filter((p) => p.length > 3)); // ['bola', 'estrela']
```

**E25.**
```js
const numeros = [3, 1, 4, 1, 5, 9, 2, 6, 5];
console.log([...new Set(numeros)]); // [3, 1, 4, 5, 9, 2, 6]
```

**E26.**
```js
const vendas = [{ produto: 'A', valor: 100 }, { produto: 'B', valor: 250 }, { produto: 'A', valor: 50 }];
const totalPorProduto = {};
for (const { produto, valor } of vendas) {
  totalPorProduto[produto] = (totalPorProduto[produto] ?? 0) + valor;
}
console.log(totalPorProduto); // { A: 150, B: 250 }
```

**E27.**
```js
const pessoas = [{ nome: 'Ana', idade: 15 }, { nome: 'Bia', idade: 22 }, { nome: 'Caio', idade: 17 }];
console.log('Menores:', pessoas.filter((p) => p.idade < 18).map((p) => p.nome)); // ['Ana', 'Caio']
console.log('Idade média:', (pessoas.reduce((s, p) => s + p.idade, 0) / pessoas.length).toFixed(1)); // 18.0
console.log('Mais velha:', pessoas.reduce((m, p) => (p.idade > m.idade ? p : m))); // { nome: 'Bia', idade: 22 }
```

## Parte 7

**E28.** Roteiro: `while (true)` pedindo `input` (placa; vazio encerra), `number` (ano) e `select` (tipo); classifique com ternário (`ano >= 2020 ? 'Novo' : 'Usado'`); guarde `{ placa, ano, tipo, condicao }` num array; ao final, conte por tipo (contador) e `filter` para "Novo".

**E29.** Roteiro: `while (true)` pedindo `number` (nota, `min:0, max:10`) e `input` (comentário, pode ficar vazio); classifique com `if`/`else if` (Detrator/Neutro/Promotor); guarde tudo num array; ao final, `filter` para contar cada grupo e calcule `NPS = (promotores/total - detratores/total) * 100`.

**E30.** Ver o material de briefings de projetos.

---

## Onde estudar mais

- **W3Schools:** [JavaScript Tutorial](https://www.w3schools.com/js/) · [If Else](https://www.w3schools.com/js/js_if_else.asp) · [Loops](https://www.w3schools.com/js/js_loop_for.asp) · [Arrays](https://www.w3schools.com/js/js_arrays.asp) · [Objects](https://www.w3schools.com/js/js_objects.asp)
- **MDN Web Docs (pt-BR):** [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- **javascript.info:** [javascript.info](https://javascript.info/)
