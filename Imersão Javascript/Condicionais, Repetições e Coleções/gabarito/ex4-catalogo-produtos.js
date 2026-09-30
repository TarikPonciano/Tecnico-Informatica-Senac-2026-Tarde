// GABARITO COMENTADO — Exercício 4: Catálogo de produtos
const produtos = [
  { nome: 'Caderno', preco: 18.9, categoria: 'papelaria', estoque: 40 },
  { nome: 'Mochila', preco: 129.9, categoria: 'acessórios', estoque: 8 },
  { nome: 'Caneta', preco: 3.5, categoria: 'papelaria', estoque: 120 },
  { nome: 'Fone de ouvido', preco: 79.9, categoria: 'eletrônicos', estoque: 15 },
  { nome: 'Garrafa', preco: 45.0, categoria: 'acessórios', estoque: 3 },
];

// 1) map: para cada produto (p), devolve só p.nome em maiúsculas.
console.log(produtos.map((p) => p.nome.toUpperCase()));

// 2) filter: mantém os produtos cujo preço é maior que 40.
console.log(produtos.filter((p) => p.preco > 40).map((p) => p.nome));

// 3) reduce: em cada volta, soma preco * estoque do produto atual ao total acumulado.
const valorTotal = produtos.reduce((total, p) => total + p.preco * p.estoque, 0);
console.log(`Valor total do estoque: R$ ${valorTotal.toFixed(2)}`);

// 4) mais barato: reduce comparando dois produtos por vez e ficando com o menor preço.
const maisBarato = produtos.reduce((menor, p) => (p.preco < menor.preco ? p : menor));
console.log('Mais barato:', maisBarato.nome, maisBarato.preco);

// 5) contagem por categoria: um objeto comum como "contador". Começa vazio {}.
//    A cada produto, soma 1 na chave da sua categoria; se a chave ainda não existe,
//    (contador[categoria] ?? 0) devolve 0 e começamos a contagem dali.
const porCategoria = {};
for (const { categoria } of produtos) {
  porCategoria[categoria] = (porCategoria[categoria] ?? 0) + 1;
}
console.log(porCategoria); // { papelaria: 2, acessórios: 2, eletrônicos: 1 }

// DESAFIO: estoque baixo
const estoqueBaixo = produtos.filter((p) => p.estoque < 10);
for (const { nome, estoque } of estoqueBaixo) {
  console.log(`Atenção: ${nome} está com só ${estoque} unidades`);
}
