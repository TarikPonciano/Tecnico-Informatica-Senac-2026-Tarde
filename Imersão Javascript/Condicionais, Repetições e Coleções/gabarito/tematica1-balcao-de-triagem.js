// GABARITO DE REFERÊNCIA — Atividade temática 1: Balcão de Triagem (Central de Suporte do Senac)
// Ver o briefing completo no material da aula. Esta é UMA solução possível; as duplas
// podem chegar a regras e mensagens diferentes, desde que cubram os mesmos casos.
import { select, confirm } from '@inquirer/prompts';

const matriculado = await confirm({ message: 'A pessoa é aluno(a) matriculado(a)?' });
const categoria = await select({
  message: 'Categoria do problema?',
  choices: [
    { name: 'Internet', value: 'internet' },
    { name: 'Impressora', value: 'impressora' },
    { name: 'Sistema Acadêmico', value: 'academico' },
    { name: 'Outro', value: 'outro' },
  ],
});
const urgencia = await select({
  message: 'Urgência?',
  choices: [
    { name: 'Baixa', value: 'baixa' },
    { name: 'Média', value: 'media' },
    { name: 'Alta', value: 'alta' },
  ],
});

// Regra 1 (prioritária): sem matrícula confirmada, vai sempre para a recepção,
// não importa a categoria nem a urgência.
let guiche;
let tempoEspera;

if (!matriculado) {
  guiche = 'Recepção — verificar cadastro';
} else if (urgencia === 'alta' && categoria === 'academico') {
  // Regra 2: combinação de alta urgência + sistema acadêmico é a mais crítica.
  guiche = 'Suporte Nível 2 (urgente)';
} else if (urgencia === 'alta') {
  guiche = 'Guichê 1 (prioritário)';
} else {
  // Regra 3: as demais são roteadas por categoria.
  switch (categoria) {
    case 'internet':
      guiche = 'Guichê 2';
      break;
    case 'impressora':
      guiche = 'Guichê 3';
      break;
    case 'academico':
      guiche = 'Guichê 4';
      break;
    default:
      guiche = 'Guichê Geral';
  }
}

// Tempo estimado: depende só da urgência, independente do guichê escolhido acima.
if (urgencia === 'alta') {
  tempoEspera = 5;
} else if (urgencia === 'media') {
  tempoEspera = 10;
} else {
  tempoEspera = 20;
}

console.log('\n=== Senha de atendimento ===');
console.log('Encaminhado para:', guiche);
console.log('Tempo estimado de espera:', tempoEspera, 'minutos');
