import { input, number } from "@inquirer/prompts"

let nome = await input({message: "Digite o nome do funcionário"})
let cpf = await input({message: "Digite o cpf do funcionário"})
let cargo =  await input({message: "Digite o cargo do funcionário"})
let departamento = await input({message: "Digite o departamento do funcionário"})
let salario = await number({message: "Digite o salário do funcionário", step:0.01})

console.log(`
FICHA DO FUNCIONÁRIO:

Nome: ${nome}

CPF: ${cpf.slice(0,3)}.${cpf.slice(3,6)}.${cpf.slice(6,9)}-${cpf.slice(9,11)}

Cargo: ${cargo}

Departamento: ${departamento}

Salário: ${salario.toLocaleString("pt-BR", {style:"currency", currency:"BRL"})}
    
`)