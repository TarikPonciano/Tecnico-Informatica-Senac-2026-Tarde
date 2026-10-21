let animal = {
    especie:"Cachorro",
    peso: 20,
    idade: 5,
    nome: "Rex",
    dono: "Marquinhos Silva"
}

console.log(`
    Ficha do Paciente:

    Nome: ${animal["nome"]}
    Espécie: ${animal["especie"]}
    Peso: ${animal["peso"]}
    Idade: ${animal["idade"]}

    Dono: ${animal["dono"]}
    
    `)

// Crie um dicionário de um funcionário com pelo menos 5 informações e imprima na tela de maneira formatada.

let funcionario = {
    nome: "Marcos",
    salario: 5500,
    cpf: "05955113456",
    cargo: "Gerente",
    dataNascimento: "20/09/1985"
}

console.log(`
    FICHA DO FUNCIONÁRIO
    
    Nome: ${funcionario["nome"]}
    Cargo: ${funcionario["cargo"]}
    Salário: ${funcionario["salario"].toLocaleString("pt-BR",{style:"currency", currency:"BRL"})}
    CPF: ${funcionario["cpf"]}
    Data de Nascimento: ${funcionario["dataNascimento"]}
    `)


// Crie um dicionário que contenha 10 pokemons

let pokedex = {
    "001": {nome:"Bulbausaur", tipo:"Grama", iv:7, level:10},
    "002": "Ivysaur",
    "003": "Venusaur",
    "004": "Squirtle",
    "005": "Wartortle",
    "006": "Blastoise",
    "007": "Charmander",
    "008": "Charmelleon",
    "009": "Charizard"
}


console.log("POKEDEX")
console.log()
for (const numPokedex in pokedex){
    console.log(`${numPokedex} - ${pokedex[numPokedex].nome} - ${pokedex[numPokedex].tipo}`)
}

