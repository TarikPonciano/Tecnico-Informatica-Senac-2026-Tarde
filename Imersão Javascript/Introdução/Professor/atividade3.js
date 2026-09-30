const nome = "Ana"
const idade = 20    
const estado = "Ceará"

// const textoFormatado = `Olá, meu nome é ${nome}, tenho ${idade} anos e moro no ${estado}.`

// console.log(textoFormatado)

console.log(`Olá, meu nome é ${nome}. 
Tenho ${idade} anos e moro no ${estado}.`);

console.table({"Nome":nome, "Idade":idade, "Estado":estado});

let preco = 1000000000000003.5;

let moeda = "USD"

console.log(preco.toLocaleString("pt-BR", {style: "currency", currency:moeda}));