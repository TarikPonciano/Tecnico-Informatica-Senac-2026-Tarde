# Lista de questões — Aula 2 de JavaScript

**Senac · Prof. Tarik Ponciano**
Condicionais · Repetições · Arrays · Objetos · Integradas

## Como usar esta lista

1. Tente resolver **sem olhar** as respostas (estão no final do arquivo).
2. Nas questões de **prever a saída**, escreva sua resposta antes de rodar no Node.
3. Nas questões de **programar**, crie um arquivo na raiz da pasta `aula2` (ao lado do `package.json`) e rode com `node meu-arquivo.js`.

Níveis: **[B]** básico · **[I]** intermediário · **[D]** desafio.
Meta sugerida: pelo menos **2 questões de cada parte**, incluindo uma de programação.

---

## Parte 1 — Condicionais

**Q1 [B]** Qual é a diferença entre `if`/`else if`/`else` e `switch`? Quando cada um é mais natural?

**Q2 [B]** Preveja o resultado:

```js
const idade = 15;
const ingresso = true;
console.log(idade >= 18 || ingresso);
```

**Q3 [I]** O código abaixo tem um erro clássico. Qual é, e o que ele causa?

```js
let x = 5;
if (x = 10) {
  console.log('entrou');
}
```

**Q4 [I]** Preveja o resultado (repare na ausência de `break`):

```js
switch (2) {
  case 1: console.log('um');
  case 2: console.log('dois');
  case 3: console.log('três');
}
```

**Q5 [B]** O que aparece na tela?

```js
const x = 0;
console.log(x ? 'a' : 'b');
```

**Q6 [I]** Preveja o resultado:

```js
let n = 8;
switch (true) {
  case n > 10: console.log('grande'); break;
  case n > 5: console.log('médio'); break;
  default: console.log('pequeno');
}
```

**Q7 [I]** Por que o código abaixo dá `ReferenceError`? Como corrigir mantendo a ideia?

```js
if (true) {
  let recado = 'oi';
}
console.log(recado);
```

**Q8 [D]** Escreva um trecho que classifique uma temperatura em `'congelante'` (≤ 0), `'frio'` (1 a 14), `'ameno'` (15 a 25) ou `'quente'` (acima de 25), usando `else if`. Depois reescreva com `switch (true)`.

---

## Parte 2 — Repetições

**Q9 [B]** Quando usar `for`, quando usar `while` e quando usar `do...while`?

**Q10 [B]** Preveja o resultado:

```js
let soma = 0;
for (let i = 1; i <= 5; i++) soma += i;
console.log(soma);
```

**Q11 [I]** Preveja o resultado (repare no incremento negativo):

```js
const r = [];
for (let i = 10; i >= 1; i -= 3) r.push(i);
console.log(r);
```

**Q12 [I]** Quantas vezes o `console.log` roda?

```js
let contador = 0;
for (let i = 1; i <= 20; i++) {
  if (i % 3 !== 0) continue;
  contador++;
}
console.log(contador);
```

**Q13 [I]** Este `do...while` deveria não imprimir nada, mas imprime um valor. Por quê?

```js
let i = 0;
const r = [];
do {
  r.push(i);
  i++;
} while (i < 0);
console.log(r);
```

**Q14 [B]** O código abaixo trava o terminal. Qual é o erro e como corrigir?

```js
let i = 0;
while (i < 10) {
  console.log(i);
}
```

**Q15 [I]** Explique, com suas palavras, o **padrão sentinela** (`while (true)` + `if` + `break`). Por que ele é útil quando não sabemos de antemão quantas vezes repetir?

**Q16 [D]** Escreva um programa com o padrão sentinela que peça números (um de cada vez) e pare quando a pessoa digitar `0`. No final, mostre quantos números foram digitados e a soma deles (sem contar o `0`).

---

## Parte 3 — Arrays

**Q17 [B]** Qual é a diferença entre `push`/`pop` e `unshift`/`shift`?

**Q18 [B]** Preveja o resultado:

```js
const a = [1, 2, 3];
a.push(4);
a.shift();
console.log(a);
```

**Q19 [I]** Preveja o resultado:

```js
const a = [5, 2, 8, 1];
console.log(a.find((x) => x > 4));
```

**Q20 [I]** Preveja o resultado (dois métodos encadeados):

```js
const a = [1, 2, 3, 4, 5];
console.log(a.filter((x) => x % 2 === 0).map((x) => x * 10));
```

**Q21 [I]** Por que `['b', 'a', 'c'].sort()` funciona bem, mas `[10, 9, 1].sort()` dá um resultado errado? Como corrigir o segundo?

**Q22 [I]** Escreva a expressão que devolve o **maior** valor de `[4, 8, 15, 16, 23, 42]` usando `reduce` (sem `Math.max`).

**Q23 [B]** Qual é a diferença entre `map` e `filter`? Dê um exemplo de uso de cada um.

**Q24 [D]** Escreva um programa que peça números até a pessoa digitar vazio (padrão sentinela), guarde todos num array e, no final, mostre: quantidade, soma, média, maior e menor — sem usar nenhuma variável acumuladora manual (use só métodos de array).

---

## Parte 4 — Objetos

**Q25 [B]** Qual é a diferença entre acessar uma propriedade com ponto (`obj.nome`) e com colchetes (`obj['nome']`)? Quando colchetes são obrigatórios?

**Q26 [I]** Preveja o resultado:

```js
const o = { a: 1, b: 2 };
const { a, ...resto } = o;
console.log(resto);
```

**Q27 [I]** Preveja o resultado:

```js
const pessoas = [
  { nome: 'Ana', idade: 30 },
  { nome: 'Bia', idade: 20 },
];
console.log(pessoas.every((p) => p.idade >= 18));
```

**Q28 [I]** Preveja o resultado:

```js
const base = { x: 1, y: 2 };
const novo = { ...base, y: 9, z: 3 };
console.log(novo);
```

**Q29 [B]** Escreva um objeto `livro` com `titulo`, `autor` e `paginas`, e percorra suas propriedades com `Object.entries` + `for...of`, mostrando "chave: valor" em cada linha.

**Q30 [D]** Você tem `const alunos = [{ nome: 'Ana', nota: 8 }, { nome: 'Bia', nota: 5 }, { nome: 'Caio', nota: 9 }]`. Monte um objeto `{ aprovados: [...], reprovados: [...] }` (nota ≥ 7 é aprovado), cada lista contendo só os nomes.

---

## Parte 5 — Integradas

**Q31 [I] Carrinho de compras.** Com `const carrinho = [{ nome: 'A', preco: 10, qtd: 2 }, { nome: 'B', preco: 5, qtd: 3 }]`, calcule o total (soma de `preco * qtd` de cada item) com `reduce`.
*Resposta esperada: 35.*

**Q32 [I] Aprovação da turma.** Com `const notas = [5, 8, 3, 9, 7]`, conte quantos alunos tiraram nota 6 ou mais.
*Resposta esperada: 3.*

**Q33 [D] Catálogo com relatório.** Construa um array de pelo menos 4 objetos `{ nome, preco, categoria }` (invente os dados) e produza: (a) nomes em maiúsculas; (b) produtos de uma categoria à sua escolha; (c) preço médio de todos; (d) o mais caro; (e) um objeto contador por categoria.

**Q34 [D] Cadastro com validação.** Peça repetidamente (padrão sentinela) o nome e a idade de uma pessoa (`input`/`number`), guardando cada uma como objeto num array, até a pessoa digitar nome vazio. Ao final, classifique e conte quantos são menores de idade, adultos (18–59) e idosos (60+), usando `filter`.

---

# Respostas e comentários

> Confira **depois** de tentar. Os trechos de código foram executados e produzem o resultado indicado.

## Parte 1 — Condicionais

**Q1.** `if`/`else if` testa CONDIÇÕES (comparações, faixas, combinações com `&&`/`||`); é natural para faixas de valores. `switch` compara UM valor com várias opções FIXAS (dias, categorias, opções de menu); fica mais legível quando há muitas opções iguais a testar.

**Q2.** `true`. O `||` já é `true` assim que um dos lados é verdadeiro; como `ingresso` é `true`, nem importa que `idade >= 18` seja `false`.

**Q3.** Um único `=` **atribui** (x recebe 10), não compara. O valor da atribuição (10) é o que a condição do `if` avalia, e 10 é truthy — então o bloco quase sempre roda, mesmo que a intenção fosse comparar. Use `===`.

**Q4.** Imprime `dois` e `três`. Sem `break`, a execução "cai" para os `case` seguintes (fallthrough), mesmo que a condição deles não bata com o valor testado.

**Q5.** `'b'`. `0` é falsy, então o ternário escolhe o lado do `:`.

**Q6.** `'médio'`. `switch (true)` testa cada `case` como uma condição booleana; `n > 10` é `false` (8 não é > 10), `n > 5` é `true` (8 > 5) — esse é o primeiro `case` verdadeiro, então é o que roda.

**Q7.** `let` (e `const`) só existem dentro do bloco `{ }` onde foram declaradas. `recado` deixa de existir assim que o `if` termina. Para usar o valor fora, declare a variável FORA do bloco e apenas atribua dentro:

```js
let recado;
if (true) {
  recado = 'oi';
}
console.log(recado);
```

**Q8.**

```js
const temperatura = 18;
let situacao;
if (temperatura <= 0) situacao = 'congelante';
else if (temperatura <= 14) situacao = 'frio';
else if (temperatura <= 25) situacao = 'ameno';
else situacao = 'quente';
console.log(situacao);

switch (true) {
  case temperatura <= 0: console.log('congelante'); break;
  case temperatura <= 14: console.log('frio'); break;
  case temperatura <= 25: console.log('ameno'); break;
  default: console.log('quente');
}
```

## Parte 2 — Repetições

**Q9.** `for`: quando já se sabe (ou se calcula) quantas repetições vão acontecer. `while`: quando a repetição depende de uma condição que só se sabe em tempo de execução (ex.: "até digitar sair"). `do...while`: como o `while`, mas quando o corpo precisa rodar **ao menos uma vez** antes do primeiro teste.

**Q10.** `15` (1+2+3+4+5).

**Q11.** `[10, 7, 4, 1]`. Começa em 10 e vai diminuindo de 3 em 3 enquanto for `>= 1`.

**Q12.** `6`. `continue` pula a volta quando `i` NÃO é múltiplo de 3; `contador++` só roda para os múltiplos de 3 entre 1 e 20 (3, 6, 9, 12, 15, 18 → seis números).

**Q13.** `do...while` testa a condição **depois** de rodar o corpo uma vez. Mesmo com `i < 0` já sendo falsa no início (i vale 0), o corpo já rodou antes desse teste — por isso `r` fica `[0]`.

**Q14.** Falta `i++` dentro do laço: a condição `i < 10` nunca muda, e o laço roda para sempre (laço infinito). Correção: adicionar `i++;` dentro do bloco.

**Q15.** `while (true)` cria um laço que roda "para sempre"; um `if` por dentro testa a condição real de parada (ex.: resposta vazia) e usa `break` para sair. É útil porque não sabemos de antemão QUANTAS vezes a pessoa vai querer repetir algo (adicionar itens, cadastrar pessoas) — deixamos ela decidir quando parar.

**Q16.**

```js
import { number } from '@inquirer/prompts';

let soma = 0;
let quantidade = 0;

while (true) {
  const n = await number({ message: 'Número? (0 encerra)', required: true });
  if (n === 0) break;
  soma += n;
  quantidade++;
}

console.log(`Foram ${quantidade} números, soma ${soma}`);
```

## Parte 3 — Arrays

**Q17.** `push`/`pop` trabalham no FIM do array (adiciona/remove o último). `unshift`/`shift` trabalham no INÍCIO (adiciona/remove o primeiro).

**Q18.** `[2, 3, 4]`. `push(4)` → `[1,2,3,4]`; `shift()` remove o `1` → `[2,3,4]`.

**Q19.** `5`. `find` devolve o PRIMEIRO item que passa no teste, em ordem: `5` já é maior que 4.

**Q20.** `[20, 40]`. `filter` mantém os pares (`2` e `4`); `map` multiplica cada um por 10.

**Q21.** `.sort()` sem comparador compara os itens como TEXTO. Com letras isso costuma "dar certo" por coincidência (ordem alfabética = ordem de texto), mas com números não: `"10"` vem antes de `"9"` como texto. Correção: `[10, 9, 1].sort((a, b) => a - b)`.

**Q22.**

```js
[4, 8, 15, 16, 23, 42].reduce((maior, x) => (x > maior ? x : maior));
// 42
```

**Q23.** `map` **transforma** cada item (o array resultado tem o mesmo tamanho) — ex.: dobrar todos os preços. `filter` **seleciona** quem passa em um teste (o resultado pode ser menor) — ex.: só os produtos em promoção.

**Q24.**

```js
import { input } from '@inquirer/prompts';

const numeros = [];
while (true) {
  const texto = await input({ message: 'Número? (Enter encerra)' });
  if (texto.trim() === '') break;
  numeros.push(Number(texto));
}

console.log('Quantidade:', numeros.length);
console.log('Soma:', numeros.reduce((s, n) => s + n, 0));
console.log('Média:', (numeros.reduce((s, n) => s + n, 0) / numeros.length).toFixed(1));
console.log('Maior:', Math.max(...numeros));
console.log('Menor:', Math.min(...numeros));
```

## Parte 4 — Objetos

**Q25.** Ponto é mais comum e mais legível. Colchetes são obrigatórios quando a chave vem de uma VARIÁVEL (`obj[variavel]`) ou quando a chave tem espaços/caracteres especiais (`obj['nome completo']`).

**Q26.** `{ b: 2 }`. A desestruturação tira `a` para uma variável separada; `...resto` junta tudo o que sobrou num objeto novo.

**Q27.** `true`. `every` só é `true` se TODOS os itens passarem no teste; as duas idades (30 e 20) são `>= 18`.

**Q28.** `{ x: 1, y: 9, z: 3 }`. O espalhamento copia `base` primeiro; `y: 9` SOBRESCREVE o `y` copiado; `z: 3` é uma propriedade nova.

**Q29.**

```js
const livro = { titulo: 'O Hobbit', autor: 'Tolkien', paginas: 310 };
for (const [chave, valor] of Object.entries(livro)) {
  console.log(`${chave}: ${valor}`);
}
```

**Q30.**

```js
const alunos = [
  { nome: 'Ana', nota: 8 },
  { nome: 'Bia', nota: 5 },
  { nome: 'Caio', nota: 9 },
];

const resultado = {
  aprovados: alunos.filter((a) => a.nota >= 7).map((a) => a.nome),
  reprovados: alunos.filter((a) => a.nota < 7).map((a) => a.nome),
};
console.log(resultado); // { aprovados: ['Ana', 'Caio'], reprovados: ['Bia'] }
```

## Parte 5 — Integradas

**Q31.**

```js
const carrinho = [
  { nome: 'A', preco: 10, qtd: 2 },
  { nome: 'B', preco: 5, qtd: 3 },
];
const total = carrinho.reduce((t, i) => t + i.preco * i.qtd, 0);
console.log(total); // 35
```

**Q32.**

```js
const notas = [5, 8, 3, 9, 7];
console.log(notas.filter((n) => n >= 6).length); // 3
```

**Q33.** Roteiro: (a) `produtos.map(p => p.nome.toUpperCase())`; (b) `produtos.filter(p => p.categoria === 'sua-categoria')`; (c) `produtos.reduce((s,p) => s + p.preco, 0) / produtos.length`; (d) `produtos.reduce((m,p) => p.preco > m.preco ? p : m)`; (e) o mesmo padrão de contador por categoria usado no Exercício 4 da aula (`objeto[chave] = (objeto[chave] ?? 0) + 1`).

**Q34.** Roteiro: `while (true)` pedindo `input` (nome) e `number` (idade); `if (nome.trim() === '') break;` antes de perguntar a idade; `pessoas.push({ nome, idade })`. No final: `pessoas.filter(p => p.idade < 18).length`, `pessoas.filter(p => p.idade >= 18 && p.idade < 60).length`, `pessoas.filter(p => p.idade >= 60).length`.

---

## Onde estudar mais

- **W3Schools (recomendado):** [If Else](https://www.w3schools.com/js/js_if_else.asp) · [Switch](https://www.w3schools.com/js/js_switch.asp) · [For Loop](https://www.w3schools.com/js/js_loop_for.asp) · [While Loop](https://www.w3schools.com/js/js_loop_while.asp) · [Arrays](https://www.w3schools.com/js/js_arrays.asp) · [Array Methods](https://www.w3schools.com/js/js_array_methods.asp) · [Objects](https://www.w3schools.com/js/js_objects.asp)
- **MDN Web Docs (pt-BR):** [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- **javascript.info:** [javascript.info](https://javascript.info/)
- **Node.js:** [documentação da API](https://nodejs.org/docs/latest/api/)
- **Biblioteca de prompts:** [@inquirer/prompts](https://github.com/SBoudrias/Inquirer.js/blob/main/packages/prompts/README.md)
