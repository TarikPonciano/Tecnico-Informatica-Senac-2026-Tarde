// Mini-projeto — Recibo de compra
import { input, number, confirm, select } from '@inquirer/prompts';

const brl = { style: 'currency', currency: 'BRL' };

const cliente = await input({ message: 'Cliente?', required: true });
const preco = await number({ message: 'Preço?', min: 0, step: 'any', required: true });
// TODO: produto, quantidade, cupom (confirm) e parcelas (select com value numérico)

// TODO: subtotal, desconto (ternário: cupom vale 10%), total e valor da parcela

// TODO: imprimir o recibo com padEnd, padStart e toLocaleString('pt-BR', brl)
