import { input, number } from "@inquirer/prompts"

let nome = await input({message: "Digite o nome do funcionário"})
let cpf = await input({message: "Digite o cpf do funcionário"})
let cargo =  await input({message: "Digite o cargo do funcionário"})
let departamento = await input({message: "Digite o departamento do funcionário"})
let salario = await number({message: "Digite o salário do funcionário", step:0.01})
