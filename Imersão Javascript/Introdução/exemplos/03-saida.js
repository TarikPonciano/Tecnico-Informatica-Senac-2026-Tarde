// Exibição de informações na tela.
const nome = 'Ana';
const idade = 20;
const preco = 1234.5;
const brl = { style: 'currency', currency: 'BRL' };

console.log('--- console.log ---');
console.log('Texto', 42, true);          // vários argumentos
console.log(null, undefined);
console.log(3 + 4);                      // 7 (a conta é feita antes)
console.log('3 + 4');                    // 3 + 4 (é só texto)
console.log();                           // linha em branco

console.log('--- outros métodos ---');
console.info('informação');
console.warn('aviso (stderr)');
console.error('erro (stderr)');
console.table([
  { nome: 'Ana', idade: 20 },
  { nome: 'Bia', idade: 22 },
]);

console.log('--- template literal ---');
console.log(`Olá, ${nome}!`);
console.log(`Em 5 anos: ${idade + 5}`);
console.log(`${nome.toUpperCase()} - ${idade}`);
console.log('Olá, ' + nome + '!');       // concatenação: mesmo resultado

console.log('--- escapes ---');
console.log('Linha 1\nLinha 2');
console.log('Col A\tCol B');
console.log('Caminho: C:\\aula\\js');
console.log('It\'s aqui');
console.log("Ele disse: \"oi\"");

console.log('--- especificadores ---');
console.log('%s tem %d anos', nome, idade);
console.log('Pi = %f', 3.14159);
console.log('Inteiro: %i', 3.9);
console.log('Dados: %j', { a: 1 });
console.log('%d%% de desconto', 15);

console.log('--- formatando números ---');
console.log(preco.toFixed(2));                       // "1234.50" (texto!)
console.log(preco.toLocaleString('pt-BR'));          // 1.234,5
console.log(preco.toLocaleString('pt-BR', brl));     // R$ 1.234,50
console.log((0.256).toLocaleString('pt-BR', { style: 'percent' }));   // 26%

console.log('--- alinhando ---');
console.log('Item'.padEnd(12) + 'Preço'.padStart(10));
console.log('-'.repeat(22));
console.log('Caderno'.padEnd(12) + '18,90'.padStart(10));
console.log('Caneta'.padEnd(12) + '3,50'.padStart(10));
