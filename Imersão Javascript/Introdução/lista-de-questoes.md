# Lista de questões — Aula 1 de JavaScript

**Senac · Prof. Tarik Ponciano**
Sintaxe e regras · Exibição · Coleta de informações · Operações

## Como usar esta lista

1. Tente resolver **sem olhar** as respostas (estão no final do arquivo).
2. Nas questões de **prever a saída**, escreva sua resposta no papel e só depois rode no Node (`node arquivo.js`) para conferir.
3. Nas questões de **programar**, crie um arquivo na raiz da pasta `aula1-sintaxe` (ao lado do `package.json`, para o `import` enxergar a `node_modules`) e rode com `node meu-arquivo.js`.
4. Errou? Releia a explicação na resposta, procure o assunto nos slides ou nos links do último slide e tente de novo.

Níveis: **[B]** básico · **[I]** intermediário · **[D]** desafio.
Meta sugerida: resolva pelo menos **2 questões de cada parte**, incluindo uma de programação.

---

## Parte 1 — Sintaxe e regras

**Q1 [B]** Quais destes nomes são válidos para uma variável? Para os inválidos, diga o motivo.
`idade` · `2aluno` · `nota_final` · `nota-final` · `$total` · `const` · `Nome` · `meuNome`

**Q2 [B]** O que acontece ao rodar o código abaixo? Como corrigir?

```js
const x = 5;
x = 6;
console.log(x);
```

**Q3 [B]** Explique, com um exemplo de código para cada, a diferença entre **declarar**, **atribuir** e **inicializar** uma variável.

**Q4 [B]** O código abaixo dá erro. Qual é o nome do erro e por quê?

```js
let nome = 'Ana';
console.log(Nome);
```

**Q5 [B]** Qual é o resultado de `typeof` em cada caso?
`'oi'` · `42` · `3.14` · `true` · `undefined` · `null` · `'42'`

**Q6 [I]** O que o código abaixo imprime? O que isso mostra sobre a tipagem do JavaScript?

```js
let v = 5;
v = 'cinco';
v = false;
console.log(typeof v);
```

**Q7 [B]** Quando usar `const`, quando usar `let` e por que evitar `var`?

**Q8 [I]** Encontre e corrija os erros (há três):

```js
const 1preco = 10;
let quantidade = 3,5;
console.log(Preco * quantidade);
```

---

## Parte 2 — Exibição de informações

**Q9 [B]** O que aparece na tela?

```js
console.log('a', 1 + 2, '1 + 2');
```

**Q10 [B]** Qual a diferença de resultado entre as duas linhas abaixo (considere `const nome = 'Ana'`)?

```js
console.log('Olá, ${nome}');
console.log(`Olá, ${nome}`);
```

**Q11 [B]** O que aparece na tela?

```js
console.log('%s tem %d anos', 'Bia', 22);
```

**Q12 [B]** O que `(7.5).toFixed(2)` devolve? Qual é o **tipo** do resultado?

**Q13 [I]** Qual é o resultado de cada expressão?

```js
'Ab'.padEnd(5, '.') + '|'
'7'.padStart(3, '0')
```

**Q14 [B]** Escreva a expressão que mostra `1234.5` como `R$ 1.234,50`.

**Q15 [I]** Com os dados abaixo, imprima três linhas alinhadas: rótulo à esquerda (12 caracteres) e valor à direita (15 caracteres). O preço deve aparecer em reais.

```js
const produto = 'Caneta';
const preco = 3.5;
const quantidade = 12;
```

---

## Parte 3 — Coleta de informações (`@inquirer/prompts`)

**Q16 [B]** Que **tipo de dado** cada função devolve?
`input` · `number` · `confirm` · `select` (com opções de `value` numérico) · `checkbox` · `password`

**Q17 [I]** Por que o código abaixo recusa a resposta `9.9`? Como corrigir?

```js
const preco = await number({ message: 'Preço?', required: true });
```

**Q18 [I]** O que o `number()` devolve quando a pessoa aperta só Enter e **não** há `required: true`? Como evitar?

**Q19 [I]** O `number()` recusa `1,75`. Como aceitar uma altura digitada com **vírgula** e obter um número?

**Q20 [B]** Escreva um prompt que pergunte a cor favorita entre `azul`, `verde` e `vermelho` e guarde o texto escolhido.

**Q21 [I]** Escreva um prompt que pergunte o tamanho da pizza (P, M ou G) e devolva o **preço numérico**: 30, 40 ou 50.

**Q22 [B]** Escreva um prompt que só aceite uma idade entre 18 e 65.

**Q23 [I]** Ao rodar o programa abaixo aparece `Promise { <pending> }` em vez do nome digitado. Por quê?

```js
import { input } from '@inquirer/prompts';

const nome = input({ message: 'Nome?' });
console.log(nome);
```

**Q24 [I]** Aparece o erro `Cannot find package '@inquirer/prompts'`. Cite duas causas prováveis e como resolver.

---

## Parte 4 — Operações com as informações

**Q25 [B]** Calcule (sem rodar):
`7 % 3` · `2 + 3 * 4` · `(2 + 3) * 4` · `2 ** 3` · `10 / 4` · `10 - 4 - 3` · `2 ** 3 ** 2`

**Q26 [B]** Qual é o valor final de `x`?

```js
let x = 10;
x += 5;
x *= 2;
x--;
```

**Q27 [I]** Preveja o resultado:
`'5' + 2` · `'5' - 2` · `'5' * '2'` · `'10' > '9'` · `10 > 9` · `'10' > 9`

**Q28 [I]** Preveja o resultado:
`Number('')` · `Number('12px')` · `parseInt('12px')` · `parseFloat('3.14abc')` · `Boolean('0')` · `Boolean('')` · `Number(null)` · `Number(undefined)`

**Q29 [I]** Preveja o resultado:
`5 === '5'` · `5 == '5'` · `0 == false` · `null == undefined` · `NaN === NaN`

**Q30 [I]** Preveja o resultado:
`true && false || true` · `!(5 > 3)` · `false || 'oi'` · `'' || 'x'` · `0 ?? 5` · `null ?? 5` · `5 > 3 && 2 > 1`

**Q31 [B]** O que aparece na tela?

```js
const idade = 17;
console.log(idade >= 18 ? 'adulto' : 'menor');
```

**Q32 [I]** Para `const s = 'Senac'`, qual é o resultado de cada expressão?
`s.length` · `s.slice(0, 3)` · `s.toUpperCase()` · `s.at(-1)` · `s.indexOf('n')` · `s.includes('na')` · `s.replace('S', 's')`

**Q33 [I]** Preveja o resultado:
`Math.round(4.5)` · `Math.floor(-1.5)` · `Math.ceil(1.2)` · `Math.trunc(-1.9)` · `Math.max(2, 8, 5)` · `Math.sqrt(81)` · `Math.abs(-7)`

**Q34 [I]** Por que `0.1 + 0.2 === 0.3` é `false`? Como mostrar o resultado da soma como `0.30`?

**Q35 [I]** Escreva a expressão que sorteia um número **inteiro** entre 1 e 100. E entre 5 e 15?

**Q36 [I]** Resolva com os dados fixos indicados (imprima o resultado):
- **a)** Área de um círculo de raio 5 (`Math.PI * raio ** 2`), com 2 casas decimais.
- **b)** Converter 135 minutos em horas e minutos (`2h 15min`).
- **c)** Total de uma conta de R$ 87,50 com 10% de gorjeta.
- **d)** Média ponderada: nota 7 (peso 2), nota 8 (peso 3), nota 9 (peso 5).
- **e)** Troco de R$ 283: quantas notas de 100, 50, 20 e 10 e quanto sobra? (use `Math.floor` e `%`)

**Q37 [D]** Este programa deveria calcular a média de 8, 6 e 7 (resultado esperado: 7), mas imprime `16.33`. Encontre o erro e corrija.

```js
const n1 = 8;
const n2 = 6;
const n3 = 7;
const media = n1 + n2 + n3 / 3;
console.log(media.toFixed(2));
```

---

## Parte 5 — Integradas (coleta → operações → exibição)

**Q38 [I] Calculadora de gorjeta.** Pergunte o valor da conta (`number` com decimais) e o percentual de gorjeta (`select` com 5%, 10% e 15%, com `value` numérico). Mostre a conta, a gorjeta e o total em reais.
*Exemplo:* conta 87,50 com 10% → gorjeta R$ 8,75 e total R$ 96,25.

**Q39 [I] Conversor de moedas** *(lição de casa da aula)*. Pergunte um valor em reais (`number`) e a moeda de destino (`select` cujo `value` é a cotação que você pesquisou). Mostre o valor convertido formatado com `toLocaleString`.
*Exemplo:* R$ 250,00 com cotação 5 → 50,00.

**Q40 [I] Ficha do aluno.** Pergunte o nome e três notas (0 a 10, com decimais). Mostre a média com 1 casa decimal e a situação: `Aprovado` se a média for pelo menos 7, senão `Recuperação` (use o operador ternário).
*Exemplos:* Ana, 8, 7,5 e 9 → média 8.2, Aprovado. Notas 5, 6 e 7 → média 6.0, Recuperação.

**Q41 [I] Custo da viagem.** Pergunte a distância (km), o consumo do carro (km por litro) e o preço do litro (R$). Mostre quantos litros serão gastos e o custo da viagem em reais.
*Exemplo:* 120 km, 12 km/l e R$ 5,80/l → 10,0 litros e R$ 58,00.

**Q42 [D] Recibo, versão 2.** Amplie o mini-projeto da aula: em vez de um cupom fixo, use um `select` com desconto de 0%, 10% ou 20% (`value` numérico) e um `confirm` para "entrega em casa?", que soma R$ 8,00 ao total (use o operador ternário). O recibo deve mostrar subtotal, desconto, entrega e total.
*Exemplo:* preço R$ 100,00, quantidade 2, desconto de 20% e entrega → subtotal 200,00, desconto 40,00, entrega 8,00, total 168,00.

---

# Respostas e comentários

> Confira **depois** de tentar. Onde há código, ele foi executado e produz o resultado indicado.

## Parte 1 — Sintaxe e regras

**Q1.** Válidos: `idade`, `nota_final`, `$total`, `Nome`, `meuNome`. Inválidos: `2aluno` (começa com dígito), `nota-final` (o hífen é o operador de subtração), `const` (palavra reservada). Lembre que `Nome` e `nome` são nomes **diferentes**.

**Q2.** `TypeError: Assignment to constant variable.` Uma constante não pode ser reatribuída. Se o valor precisa mudar, declare com `let x = 5;`.

**Q3.**
- Declarar: criar a variável. `let idade;` (vale `undefined`).
- Atribuir: dar (ou trocar) um valor. `idade = 20;`
- Inicializar: declarar já com um valor. `let ano = 2026;`

**Q4.** `ReferenceError: Nome is not defined`. O JavaScript diferencia maiúsculas de minúsculas: existe `nome`, mas não `Nome`.

**Q5.** `'string'`, `'number'`, `'number'`, `'boolean'`, `'undefined'`, `'object'` (um bug histórico da linguagem), `'string'` (`'42'` entre aspas é texto).

**Q6.** Imprime `boolean`. Em JavaScript o tipo pertence ao **valor**, não à variável: a mesma variável (`let`) pode receber valores de tipos diferentes (tipagem dinâmica).

**Q7.** Use `const` por padrão (o valor não será reatribuído). Use `let` quando precisar reatribuir. Evite `var`: tem escopo de função, permite redeclarar o mesmo nome sem erro e causa comportamentos surpreendentes.

**Q8.** Erros: `1preco` começa com dígito (renomeie, por exemplo, para `preco`); `3,5` deve ser `3.5` (ponto decimal); `Preco` deve ser `preco` (maiúsculas importam: precisa ser exatamente o nome declarado). Corrigido:

```js
const preco = 10;
let quantidade = 3.5;
console.log(preco * quantidade);   // 35
```

## Parte 2 — Exibição

**Q9.** `a 3 1 + 2`. A conta `1 + 2` é feita antes de exibir; `'1 + 2'` entre aspas é só texto; os argumentos são separados por espaço.

**Q10.** A primeira (aspas simples) **não interpola**: imprime literalmente `Olá, ${nome}`. A segunda (crases) imprime `Olá, Ana`.

**Q11.** `Bia tem 22 anos`. `%s` recebe texto e `%d` recebe número, na ordem dos argumentos.

**Q12.** `"7.50"`, do tipo **string**: `toFixed` devolve texto. Por isso, use-o só para exibir e mantenha o número original para as contas.

**Q13.** `'Ab...|'` (completa à direita com pontos até 5 caracteres) e `'007'` (completa à esquerda com zeros até 3 caracteres).

**Q14.**

```js
(1234.5).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })   // R$ 1.234,50
```

**Q15.**

```js run
const produto = 'Caneta';
const preco = 3.5;
const quantidade = 12;
const brl = { style: 'currency', currency: 'BRL' };

console.log('Produto'.padEnd(12) + produto.padStart(15));
console.log('Preço'.padEnd(12) + preco.toLocaleString('pt-BR', brl).padStart(15));
console.log('Quantidade'.padEnd(12) + String(quantidade).padStart(15));
```

`padStart` só existe em texto: por isso `String(quantidade)`. O resultado de `toLocaleString` já é texto.

## Parte 3 — Coleta

**Q16.** `input` → string · `number` → number (ou `undefined` se vazio e sem `required`) · `confirm` → boolean · `select` → o tipo do `value` da opção (aqui, number) · `checkbox` → array com os `value` marcados · `password` → string.

**Q17.** Por padrão o `number()` só aceita **inteiros** (`step` padrão é 1) e mostra "Value must be a multiple of 1". Correção: `step: 'any'`.

```js
const preco = await number({ message: 'Preço?', step: 'any', required: true });
```

**Q18.** Devolve `undefined` (não `0`). Para evitar, use `required: true`.

**Q19.** Use `input` (que aceita qualquer texto) e converta trocando a vírgula por ponto:

```js
const texto = await input({ message: 'Altura (m)?' });
const altura = Number(texto.replace(',', '.'));
```

**Q20.**

```js
const cor = await select({
  message: 'Cor favorita?',
  choices: ['azul', 'verde', 'vermelho'],
});
```

Com uma lista de textos, o valor devolvido é o próprio texto escolhido.

**Q21.**

```js
const preco = await select({
  message: 'Tamanho da pizza?',
  choices: [
    { name: 'P', value: 30 },
    { name: 'M', value: 40 },
    { name: 'G', value: 50 },
  ],
});
```

`name` é o que aparece na tela; `value` é o que a função devolve (aqui, um número).

**Q22.**

```js
const idade = await number({ message: 'Idade?', min: 18, max: 65, required: true });
```

**Q23.** Faltou o `await`. Sem ele, a variável recebe a promessa (a resposta que ainda vai chegar), não o valor. Correto: `const nome = await input({ message: 'Nome?' });`.

**Q24.** (1) O programa está sendo executado **fora da pasta** `aula1-sintaxe`: entre nela (`cd aula1-sintaxe`). (2) A pasta foi copiada **sem a `node_modules`**: rode `npm install` dentro da pasta.

## Parte 4 — Operações

**Q25.** `1`, `14`, `20`, `8`, `2.5`, `3`, `512`. Observações: `*` vem antes de `+`; parênteses primeiro; `10 - 4 - 3` vai da esquerda para a direita; `**` é o único que vai da **direita** para a esquerda (`2 ** 3 ** 2` = `2 ** 9`).

**Q26.** `29` (10 → 15 → 30 → 29).

**Q27.** `'52'` (o `+` concatena quando há texto) · `3` (o `-` converte para número) · `10` · `false` (compara **texto**: `'1'` vem antes de `'9'`) · `true` · `true` (um lado é número, então converte).

**Q28.** `0` (texto vazio vira zero!) · `NaN` · `12` (`parseInt` lê o começo válido) · `3.14` · `true` (texto não vazio) · `false` · `0` · `NaN`.

**Q29.** `false` · `true` (o `==` converte os tipos) · `true` · `true` · `false` (`NaN` nunca é igual a nada; use `Number.isNaN`). Por isso, use sempre `===` e `!==`.

**Q30.** `true` (o `&&` tem prioridade: `(true && false) || true`) · `false` · `'oi'` · `'x'` (`||` troca qualquer valor falsy) · `0` (`??` só troca `null` e `undefined`) · `5` · `true`.

**Q31.** `menor`. O ternário `condição ? valorSeVerdadeiro : valorSeFalso` escolhe um valor com base em um boolean.

**Q32.** `5` · `'Sen'` · `'SENAC'` · `'c'` · `2` (as posições começam em 0) · `true` · `'senac'`. Lembre: os métodos devolvem um texto **novo** (strings não mudam).

**Q33.** `5` · `-2` (`floor` sempre vai para baixo) · `2` · `-1` (`trunc` só corta os decimais) · `8` · `9` · `7`.

**Q34.** Os computadores guardam decimais em binário e `0.1 + 0.2` dá `0.30000000000000004`, que não é exatamente `0.3`. Para exibir: `(0.1 + 0.2).toFixed(2)` → `'0.30'` (texto). Para dinheiro, mantenha o número e formate só na exibição (ou trabalhe em centavos).

**Q35.** De 1 a 100: `Math.floor(Math.random() * 100) + 1`. De 5 a 15 (11 valores): `Math.floor(Math.random() * 11) + 5`. Regra geral de MIN a MAX: `Math.floor(Math.random() * (MAX - MIN + 1)) + MIN`.

**Q36.**

```js run
// a) área do círculo
const raio = 5;
const area = Math.PI * raio ** 2;
console.log(`Área: ${area.toFixed(2)}`);   // Área: 78.54

// b) 135 minutos em horas e minutos
const minutosTotais = 135;
console.log(`${Math.floor(minutosTotais / 60)}h ${minutosTotais % 60}min`);   // 2h 15min

// c) conta de R$ 87,50 com 10% de gorjeta
const conta = 87.5;
const totalComGorjeta = conta * 1.1;
console.log(`Total: ${totalComGorjeta.toFixed(2)}`);   // Total: 96.25

// d) média ponderada: soma de (nota x peso) dividida pela soma dos pesos
const mediaPonderada = (7 * 2 + 8 * 3 + 9 * 5) / (2 + 3 + 5);
console.log(mediaPonderada);   // 8.3

// e) troco de R$ 283: divisão inteira (Math.floor) e resto (%) em cadeia
let resto = 283;
const de100 = Math.floor(resto / 100);
resto = resto % 100;
const de50 = Math.floor(resto / 50);
resto = resto % 50;
const de20 = Math.floor(resto / 20);
resto = resto % 20;
const de10 = Math.floor(resto / 10);
resto = resto % 10;
console.log(`${de100}x100 ${de50}x50 ${de20}x20 ${de10}x10, sobram ${resto}`);   // 2x100 1x50 1x20 1x10, sobram 3
```

**Q37.** A divisão tem prioridade sobre a soma: a expressão calcula `n1 + n2 + (n3 / 3)` = `8 + 6 + 2.33` = `16.33`. Correção com parênteses:

```js
const media = (n1 + n2 + n3) / 3;   // 7
```

## Parte 5 — Integradas

**Q38.**

```js
import { number, select } from '@inquirer/prompts';

const brl = { style: 'currency', currency: 'BRL' };

const conta = await number({ message: 'Valor da conta (R$)?', min: 0, step: 'any', required: true });
const percentual = await select({
  message: 'Gorjeta?',
  choices: [
    { name: '5%', value: 0.05 },
    { name: '10%', value: 0.1 },
    { name: '15%', value: 0.15 },
  ],
});

const gorjeta = conta * percentual;
const total = conta + gorjeta;

console.log('Conta  :', conta.toLocaleString('pt-BR', brl));
console.log('Gorjeta:', gorjeta.toLocaleString('pt-BR', brl));
console.log('Total  :', total.toLocaleString('pt-BR', brl));
```

**Q39.** Roteiro: (1) `number` com `step: 'any'` para o valor; (2) `select` com `choices` do tipo `{ name: 'Dólar', value: 5.0 }` (use a cotação que você pesquisou); (3) `const convertido = valor / cotacao;` (para moedas cotadas em reais, divide-se o valor em reais pela cotação); (4) exiba com `convertido.toLocaleString('pt-BR', { style: 'currency', currency: 'USD' })` (troque `USD` por `EUR`, etc.). Com R$ 250,00 e cotação 5, o resultado é 50,00.

**Q40.**

```js
import { input, number } from '@inquirer/prompts';

const nome = await input({ message: 'Nome do aluno?', required: true });
const n1 = await number({ message: 'Nota 1?', min: 0, max: 10, step: 'any', required: true });
const n2 = await number({ message: 'Nota 2?', min: 0, max: 10, step: 'any', required: true });
const n3 = await number({ message: 'Nota 3?', min: 0, max: 10, step: 'any', required: true });

const media = (n1 + n2 + n3) / 3;
const situacao = media >= 7 ? 'Aprovado' : 'Recuperação';

console.log(`${nome}: média ${media.toFixed(1)} - ${situacao}`);
```

**Q41.** Roteiro: `litros = distancia / consumo` e `custo = litros * precoLitro`. Use `number` com `step: 'any'` nas três perguntas. Exiba `litros.toFixed(1)` e `custo.toLocaleString('pt-BR', brl)`. Com 120 km, 12 km/l e R$ 5,80/l: 10,0 litros e R$ 58,00.

**Q42.** Roteiro: (1) `desconto` vem do `select` com `value` 0, 0.1 ou 0.2; (2) `const valorDesconto = subtotal * desconto;` (3) `const entrega = entregaEmCasa ? 8 : 0;` (ternário; `entregaEmCasa` vem do `confirm`); (4) `const total = subtotal - valorDesconto + entrega;` (5) imprima cada linha com `padEnd` e `padStart`. Com preço 100, quantidade 2, desconto de 20% e entrega: subtotal 200,00, desconto 40,00, entrega 8,00, total 168,00.

---

## Onde estudar mais

- **W3Schools (recomendado):** [JavaScript Tutorial](https://www.w3schools.com/js/) e [JavaScript Reference](https://www.w3schools.com/jsref/). Páginas úteis para esta lista: [Syntax](https://www.w3schools.com/js/js_syntax.asp), [Data Types](https://www.w3schools.com/js/js_datatypes.asp), [Operators](https://www.w3schools.com/js/js_operators.asp) e [Output](https://www.w3schools.com/js/js_output.asp). O conteúdo é em inglês; os exemplos podem ser editados e executados no próprio site.
- **MDN Web Docs (pt-BR):** [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- **javascript.info:** [javascript.info](https://javascript.info/)
- **Node.js:** [documentação da API](https://nodejs.org/docs/latest/api/)
- **Biblioteca de prompts:** [@inquirer/prompts](https://github.com/SBoudrias/Inquirer.js/blob/main/packages/prompts/README.md)
