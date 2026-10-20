import { input, number } from "@inquirer/prompts"


// Cada pergunta aguarda a resposta antes de continuar; input recebe texto e number recebe um valor numérico.
let nome = await input({message:"Digite seu nome: "})
let idade = await number({message:"Digite seu idade: "})
let cidade = await input({message:"Digite seu cidade: "})
let estado = await input({message:"Digite seu estado: "})

// O objeto agrupa os dados da pessoa em propriedades com chave e valor.
let pessoa = {
    "nome": nome,
    "idade": idade,
    "cidade": cidade,
    "estado": estado
}

// Também é possível adicionar uma nova propriedade depois de criar o objeto.
pessoa["país"] = "Brasil"

// Esta é uma forma alternativa e resumida de criar um objeto usando variáveis de mesmo nome.
// let pessoaAlternativo = {
//     nome,
//     idade,
//     cidade
// }

// Exibe o objeto completo no terminal.
console.log(pessoa)

// Percorre as chaves enumeráveis do objeto, uma por vez.
console.log("FICHA DO CLIENTE")

for(const info in pessoa){
    // Converte o nome da propriedade para maiúsculas e consulta seu valor usando a chave.
    console.log(`${info.toUpperCase()} - ${pessoa[info]}`)
}
