// GABARITO DE REFERÊNCIA — Mini-projeto integrador: Inscrições do Evento Tech Senac
// Junta tudo: prompts (aula 1) + condicionais + laços + array de objetos (aula 2).
import { input, select, confirm } from '@inquirer/prompts';

const LIMITE_DE_VAGAS = 5; // pequeno de propósito, para dar para testar o "evento lotado"
const inscritos = [];

while (true) {
  if (inscritos.length >= LIMITE_DE_VAGAS) {
    console.log('\nEvento lotado! Encerrando as inscrições.');
    break; // condição de parada por CAPACIDADE, além da parada por nome vazio
  }

  const nome = await input({ message: 'Nome do participante? (Enter em branco para encerrar)' });
  if (nome.trim() === '') break;

  const categoria = await select({
    message: 'Categoria?',
    choices: [
      { name: 'Aluno do Senac', value: 'aluno' },
      { name: 'Egresso', value: 'egresso' },
      { name: 'Convidado externo', value: 'externo' },
    ],
  });
  const querCertificado = await confirm({ message: 'Deseja certificado?', default: true });

  inscritos.push({ nome, categoria, querCertificado });
  console.log(`Inscrição confirmada! (${inscritos.length}/${LIMITE_DE_VAGAS} vagas)`);
}

// ---------- relatório final ----------
console.log('\n================ RELATÓRIO DO EVENTO ================');

if (inscritos.length === 0) {
  console.log('Ninguém se inscreveu.');
} else {
  console.log('\nLista de inscritos:');
  for (const { nome, categoria, querCertificado } of inscritos) {
    const certificado = querCertificado ? 'com certificado' : 'sem certificado';
    console.log(`- ${nome.padEnd(20)} ${categoria.padEnd(10)} (${certificado})`);
  }

  // contagem por categoria: mesmo padrão do "contador" usado no exercício de produtos
  const porCategoria = {};
  for (const { categoria } of inscritos) {
    porCategoria[categoria] = (porCategoria[categoria] ?? 0) + 1;
  }
  console.log('\nInscritos por categoria:', porCategoria);

  const totalCertificados = inscritos.filter((i) => i.querCertificado).length;
  console.log(`Certificados a emitir: ${totalCertificados} de ${inscritos.length}`);

  // some/every: perguntas de sim ou não sobre TODA a lista
  const algumExterno = inscritos.some((i) => i.categoria === 'externo');
  const todosQueremCertificado = inscritos.every((i) => i.querCertificado);
  console.log('Há convidados externos?', algumExterno);
  console.log('Todos pediram certificado?', todosQueremCertificado);

  if (inscritos.length >= LIMITE_DE_VAGAS) {
    console.log('\nEvento esgotou as vagas nesta simulação.');
  } else {
    console.log(`\nAinda restam ${LIMITE_DE_VAGAS - inscritos.length} vaga(s).`);
  }
}
