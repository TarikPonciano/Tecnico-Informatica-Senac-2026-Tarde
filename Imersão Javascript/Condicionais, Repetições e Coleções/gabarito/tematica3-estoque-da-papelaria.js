// GABARITO DE REFERÊNCIA — Atividade temática 3: Estoque da Papelaria do Senac
import { input, number } from '@inquirer/prompts';

const estoque = []; // array de objetos: cada item é { nome, preco, quantidade }

while (true) {
  const nome = await input({ message: 'Nome do produto? (Enter em branco para terminar o cadastro)' });
  if (nome.trim() === '') break;

  const preco = await number({ message: 'Preço (R$)?', min: 0, step: 'any', required: true });
  const quantidade = await number({ message: 'Quantidade em estoque?', min: 0, required: true });

  // cada produto vira um OBJETO dentro do array "estoque"
  estoque.push({ nome, preco, quantidade });
}

console.log('\n=== Situação do estoque ===');
for (const produto of estoque) {
  // Classifica cada item conforme a quantidade (condicional dentro do laço)
  let situacao;
  if (produto.quantidade === 0) {
    situacao = 'ESGOTADO';
  } else if (produto.quantidade < 5) {
    situacao = 'BAIXO';
  } else {
    situacao = 'OK';
  }
  console.log(`${produto.nome.padEnd(20)} qtd: ${String(produto.quantidade).padStart(4)}  [${situacao}]`);
}

console.log('\n=== Itens para repor (baixo ou esgotado) ===');
const paraRepor = estoque.filter((p) => p.quantidade < 5);
if (paraRepor.length === 0) {
  console.log('Nenhum item precisa de reposição.');
} else {
  for (const { nome, quantidade } of paraRepor) {
    console.log(`- ${nome} (restam ${quantidade})`);
  }
}

const valorTotal = estoque.reduce((total, p) => total + p.preco * p.quantidade, 0);
console.log(`\nValor total do estoque: R$ ${valorTotal.toFixed(2)}`);

if (estoque.length > 0) {
  const maisCaro = estoque.reduce((maior, p) => (p.preco > maior.preco ? p : maior));
  console.log(`Produto mais caro: ${maisCaro.nome} (R$ ${maisCaro.preco.toFixed(2)})`);

  const porPreco = [...estoque].sort((a, b) => a.preco - b.preco);
  console.log('Do mais barato ao mais caro:', porPreco.map((p) => p.nome).join(', '));
}
