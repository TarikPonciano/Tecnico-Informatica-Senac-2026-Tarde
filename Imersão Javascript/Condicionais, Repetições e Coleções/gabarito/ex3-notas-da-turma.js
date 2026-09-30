// GABARITO COMENTADO — Exercício 3: Notas da turma
const notas = [7.5, 4.0, 9.0, 6.5, 10, 3.5, 8.0];

// 1) Média: reduce soma tudo, e dividimos pela quantidade (notas.length).
const soma = notas.reduce((total, n) => total + n, 0);
const media = soma / notas.length;
console.log(`Média: ${media.toFixed(1)}`);

// 2) Maior e menor: Math.max/min não aceitam um array direto, mas o espalhamento
//    (...) "abre" o array em argumentos separados: Math.max(7.5, 4.0, 9.0, ...).
const maior = Math.max(...notas);
const menor = Math.min(...notas);
console.log(`Maior: ${maior} | Menor: ${menor}`);

// 3) Aprovados: filter devolve um NOVO array só com quem passou no teste;
//    .length conta quantos sobraram.
const aprovados = notas.filter((n) => n >= 7);
console.log(`Aprovados: ${aprovados.length} de ${notas.length}`);

// 4) Lista em ordem crescente: sort SEM comparador ordena como texto (erro clássico
//    com números). Por isso usamos (a, b) => a - b.
const aprovadosOrdenados = [...aprovados].sort((a, b) => a - b);
console.log('Notas aprovadas (crescente):', aprovadosOrdenados);
// Repare no [...aprovados]: copiamos antes de ordenar. sort() ALTERA o array
// original; como aprovados já é um array novo (veio do filter), aqui nem seria
// obrigatório copiar de novo, mas é um hábito seguro sempre que for ordenar.

// DESAFIO: percentual de aprovação
const percentual = (aprovados.length / notas.length) * 100;
console.log(`Aprovação: ${percentual.toFixed(1)}%`);
