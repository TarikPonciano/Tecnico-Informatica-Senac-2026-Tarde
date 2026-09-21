// GABARITO COMENTADO — Exercício 2: ficha do produto (só exibição)
const produto = 'Fone Bluetooth';
const preco = 129.9;
const quantidade = 3;
const desconto = 0.15;

// Guardamos as opções de moeda em uma constante para não repetir em cada linha.
const brl = { style: 'currency', currency: 'BRL' };

// '='.repeat(34) repete o caractere 34 vezes: uma linha separadora.
const linha = '='.repeat(34);

// Layout: 14 caracteres para o rótulo + 20 para o valor = 34 no total.
//   padEnd(14)   -> completa com espaços à DIREITA (o rótulo fica alinhado à esquerda)
//   padStart(20) -> completa com espaços à ESQUERDA (o valor fica alinhado à direita)
console.log(linha);
console.log(' FICHA DO PRODUTO');
console.log(linha);
console.log('Produto'.padEnd(14) + produto.padStart(20));

// toLocaleString devolve TEXTO, então padStart funciona direto no resultado.
console.log('Preço'.padEnd(14) + preco.toLocaleString('pt-BR', brl).padStart(20));

// quantidade é um NÚMERO, e padStart só existe em texto.
// Por isso convertemos antes com String(...). Sem isso: TypeError: ... padStart is not a function.
console.log('Quantidade'.padEnd(14) + String(quantidade).padStart(20));

// style: 'percent' multiplica por 100 e acrescenta o símbolo: 0.15 -> 15%.
console.log('Desconto'.padEnd(14) + desconto.toLocaleString('pt-BR', { style: 'percent' }).padStart(20));
console.log(linha);

// DESAFIO: console.table mostra os mesmos dados em uma tabela.
// { produto, preco, quantidade, desconto } é um atalho para { produto: produto, preco: preco, ... }.
console.table([{ produto, preco, quantidade, desconto }]);
