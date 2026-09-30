// GABARITO DE REFERÊNCIA — Atividade temática 2: Turno de Caixa da Cantina do Senac
import { input, number } from '@inquirer/prompts';

let totalDoTurno = 0;
let quantidadeDeVendas = 0;
let vendasComDesconto = 0;

while (true) {
  const nomeItem = await input({ message: 'Item vendido? (Enter em branco para fechar o caixa)' });
  if (nomeItem.trim() === '') break; // condição de parada do while

  const precoUnitario = await number({ message: 'Preço unitário (R$)?', min: 0, step: 'any', required: true });
  const quantidade = await number({ message: 'Quantidade?', min: 1, required: true });

  let valorDaVenda = precoUnitario * quantidade;

  // Regra da cantina: 5 unidades ou mais do MESMO item ganham 10% de desconto.
  if (quantidade >= 5) {
    valorDaVenda *= 0.9;
    vendasComDesconto++;
    console.log(`  -> desconto de 10% aplicado (comprou ${quantidade} unidades)`);
  }

  console.log(`  ${nomeItem}: R$ ${valorDaVenda.toFixed(2)}`);

  totalDoTurno += valorDaVenda;
  quantidadeDeVendas++;
}

console.log('\n=== Fechamento do caixa ===');
console.log('Vendas realizadas:', quantidadeDeVendas);
console.log('Vendas com desconto:', vendasComDesconto);
console.log('Total do turno: R$', totalDoTurno.toFixed(2));

// Regra do frete/brinde: turno acima de R$ 100 dá direito a um brinde para reposição.
if (totalDoTurno >= 100) {
  console.log('Meta batida! Turno dá direito a um brinde de reposição.');
} else {
  const faltam = 100 - totalDoTurno;
  console.log(`Faltaram R$ ${faltam.toFixed(2)} para bater a meta do turno.`);
}
