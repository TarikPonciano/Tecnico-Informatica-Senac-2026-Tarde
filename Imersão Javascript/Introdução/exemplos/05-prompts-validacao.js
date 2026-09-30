// Opções que validam a resposta antes de aceitá-la.
import { input, number } from '@inquirer/prompts';

// validate: recebe a resposta e devolve true (aceita) ou um texto (mensagem de erro)
const email = await input({
  message: 'E-mail?',
  validate: (valor) => valor.includes('@') || 'Digite um e-mail válido',
});

const par = await number({
  message: 'Um número par?',
  required: true,
  validate: (n) => n % 2 === 0 || 'Só números pares',
});

// min e max validam a faixa sem precisar de função
const idade = await number({ message: 'Idade?', min: 0, max: 120, required: true });

// pattern: expressão regular que a resposta precisa seguir
const cep = await input({
  message: 'CEP?',
  pattern: /^\d{5}-?\d{3}$/,
  patternError: 'Use o formato 12345-678',
});

console.log({ email, par, idade, cep });
