// GABARITO COMENTADO — Atividade 4: quatro formas de mostrar o mesmo número
const preco = 1499.9;
const desconto = 0.15;

// 1) toFixed(2): arredonda para 2 casas e usa PONTO decimal (padrão americano).
//    ATENÇÃO: devolve TEXTO (string), não número.
console.log(preco.toFixed(2));            // 1499.90
console.log(typeof preco.toFixed(2));     // string

// 2) toLocaleString('pt-BR'): usa o padrão brasileiro (ponto de milhar, vírgula decimal).
//    Sem opções, mostra só as casas decimais necessárias.
console.log(preco.toLocaleString('pt-BR')); // 1.499,9

// 3) Como moeda: o segundo argumento é um objeto de opções.
//    style: 'currency' pede formato de moeda; currency: 'BRL' escolhe o real.
//    (Entre "R$" e o número há um espaço especial que não quebra linha.)
console.log(preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })); // R$ 1.499,90

// 4) Como percentual: style: 'percent' MULTIPLICA por 100 e acrescenta o símbolo %.
console.log(desconto.toLocaleString('pt-BR', { style: 'percent' })); // 15%

// REGRA PRÁTICA: formate só na hora de EXIBIR. Para continuar fazendo contas,
// mantenha o número original (preco), nunca o texto formatado.
