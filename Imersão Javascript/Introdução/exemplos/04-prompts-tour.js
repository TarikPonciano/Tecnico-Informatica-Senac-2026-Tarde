// Um exemplo de cada tipo de prompt, mostrando o TIPO do valor que volta.
import { input, number, confirm, select, checkbox, password } from '@inquirer/prompts';

const nome = await input({ message: 'Nome?', default: 'visitante' });
const idade = await number({ message: 'Idade?', min: 0, max: 120, required: true });
const novidades = await confirm({ message: 'Aceita receber novidades?', default: true });
const parcelas = await select({
  message: 'Parcelas?',
  choices: [
    { name: 'À vista', value: 1 },
    { name: '3x sem juros', value: 3 },
    { name: '12x com juros', value: 12 },
  ],
});
const extras = await checkbox({
  message: 'Extras? (espaço marca, Enter confirma)',
  choices: [
    { name: 'Embalagem para presente', value: 'embalagem' },
    { name: 'Cartão personalizado', value: 'cartao' },
    { name: 'Entrega expressa', value: 'expressa' },
  ],
});
const senha = await password({ message: 'Senha?', mask: '*' });

console.log('\n--- o que cada prompt devolveu ---');
console.log('input    ->', nome, '|', typeof nome);
console.log('number   ->', idade, '|', typeof idade);
console.log('confirm  ->', novidades, '|', typeof novidades);
console.log('select   ->', parcelas, '|', typeof parcelas);
console.log('checkbox ->', extras, '| array?', Array.isArray(extras));
console.log('password ->', senha, '|', typeof senha);
