// GABARITO COMENTADO — Mini-projeto: recibo de compra
//
// Um programa em três etapas, as mesmas da aula:
//   1) COLETA  -> prompts (cada função devolve o tipo certo)
//   2) OPERAÇÕES -> contas e escolhas com os valores coletados
//   3) EXIBIÇÃO -> recibo alinhado e formatado em reais
import { input, number, confirm, select } from '@inquirer/prompts';

// Opções de moeda guardadas uma vez e reutilizadas em todas as linhas.
const brl = { style: 'currency', currency: 'BRL' };

// ======================= 1. COLETA ==========================================
const cliente = await input({ message: 'Cliente?', required: true });
const produto = await input({ message: 'Produto?', required: true });

// step: 'any' -> aceita decimais (preço com centavos). min: 0 -> não aceita negativo.
const preco = await number({ message: 'Preço unitário (R$)?', min: 0, step: 'any', required: true });

// Quantidade: inteiro (step padrão) de pelo menos 1.
const quantidade = await number({ message: 'Quantidade?', min: 1, required: true });

// confirm -> boolean. Sem cupom por padrão.
const temCupom = await confirm({ message: 'Tem cupom de 10%?', default: false });

// select com value NUMÉRICO: já chega pronto para dividir o total.
const parcelas = await select({
  message: 'Parcelas?',
  choices: [
    { name: 'À vista', value: 1 },
    { name: '3x sem juros', value: 3 },
    { name: '12x sem juros', value: 12 },
  ],
});

// ======================= 2. OPERAÇÕES =======================================
const subtotal = preco * quantidade;

// Operador ternário:  condição ? valorSeTrue : valorSeFalse
// Se tem cupom, o desconto é 10% do subtotal; senão, é zero.
const desconto = temCupom ? subtotal * 0.1 : 0;

const total = subtotal - desconto;
const valorParcela = total / parcelas;

// Importante: as contas usam os NÚMEROS originais. Formatar (toLocaleString) só na exibição.

// ======================= 3. EXIBIÇÃO ========================================
const linha = '='.repeat(36);
console.log(`\n${linha}\n RECIBO DE COMPRA\n${linha}`);

// Rótulo alinhado à esquerda (padEnd) e valor à direita (padStart).
console.log('Cliente'.padEnd(12) + cliente.padStart(24));
console.log('Produto'.padEnd(12) + produto.padStart(24));

// Template literal monta "3 x R$ 129,90" e o padStart alinha o conjunto.
console.log('Qtd'.padEnd(12) + `${quantidade} x ${preco.toLocaleString('pt-BR', brl)}`.padStart(24));

console.log('Subtotal'.padEnd(16) + subtotal.toLocaleString('pt-BR', brl).padStart(20));
console.log('Desconto'.padEnd(16) + desconto.toLocaleString('pt-BR', brl).padStart(20));
console.log('Total'.padEnd(16) + total.toLocaleString('pt-BR', brl).padStart(20));
console.log(`${parcelas}x de`.padEnd(16) + valorParcela.toLocaleString('pt-BR', brl).padStart(20));
console.log(linha);

// Exemplo para conferir: Ana Souza, Fone Bluetooth, R$ 129,90 x 3, com cupom, 3x
//   subtotal 389,70 | desconto 38,97 | total 350,73 | 3x de 116,91
