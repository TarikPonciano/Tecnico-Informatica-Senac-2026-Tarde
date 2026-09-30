// Exercício 3 — Cadastro com vários tipos de prompt
import { input, number, confirm, select, checkbox, password } from '@inquirer/prompts';

// Pergunte, nesta ordem:
//   1) nome          (input, obrigatório)
//   2) idade         (number, de 0 a 120, obrigatório)
//   3) altura em m   (number com DECIMAIS, de 0.5 a 2.5, obrigatório)
//   4) novidades?    (confirm)
//   5) plano         (select; value NUMÉRICO: 0, 29.9 ou 59.9)
//   6) interesses    (checkbox)
//   7) senha         (password, com mask)
//
// No final, mostre cada resposta junto com o seu typeof.
//
// Desafio: mostre a senha como asteriscos (repeat) e os dados com console.table.

// TODO: escreva seu código aqui
