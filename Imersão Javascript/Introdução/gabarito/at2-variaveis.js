// GABARITO COMENTADO — Atividade 2: variáveis e tipos
//
// Ideia central: const para o que não muda, let para o que vai mudar.
// Comece sempre com const; só troque para let quando precisar reatribuir.

// 1) CONSTANTE de texto (string). O valor vai entre aspas.
const nomeCurso = 'Desenvolvimento de Sistemas';

// 2) CONSTANTE numérica (number). Números NÃO levam aspas.
const cargaHoraria = 1200;

// 3) VARIÁVEL numérica: usamos let porque o valor vai mudar.
let vagasRestantes = 30;
vagasRestantes = 25; // reatribuição: o nome não é declarado de novo (sem let na frente)

// 4) VARIÁVEL booleana: só pode ser true ou false (sem aspas).
let turmaAberta = true;

// 5) typeof mostra o TIPO do valor guardado no momento.
console.log(nomeCurso, typeof nomeCurso);           // Desenvolvimento de Sistemas string
console.log(cargaHoraria, typeof cargaHoraria);     // 1200 number
console.log(vagasRestantes, typeof vagasRestantes); // 25 number
console.log(turmaAberta, typeof turmaAberta);       // true boolean

// DESAFIO: reatribuir uma constante.
// Descomente a linha abaixo e rode:
// nomeCurso = 'Outro curso';
//   Erro: TypeError: Assignment to constant variable.
//   Correção: se o valor precisa mudar, declare com let em vez de const.

// Observação: "typeof" de um texto entre aspas é sempre "string", mesmo que o conteúdo
// pareça um número: typeof '25' é "string", enquanto typeof 25 é "number".
