// Exercício 2 — Ficha do produto (só exibição: ainda sem contas)
const produto = 'Fone Bluetooth';
const preco = 129.9;
const quantidade = 3;
const desconto = 0.15;
const brl = { style: 'currency', currency: 'BRL' };

// Monte esta ficha (34 caracteres de largura):
//
//   ==================================
//    FICHA DO PRODUTO
//   ==================================
//   Produto             Fone Bluetooth
//   Preço                    R$ 129,90
//   Quantidade                       3
//   Desconto                       15%
//   ==================================
//
// Dicas: '='.repeat(34); rotulo.padEnd(14) + valor.padStart(20);
//        quantidade é número: use String(quantidade) antes de padStart.
//
// Desafio: mostre os mesmos dados com console.table.

// TODO: escreva seu código aqui
