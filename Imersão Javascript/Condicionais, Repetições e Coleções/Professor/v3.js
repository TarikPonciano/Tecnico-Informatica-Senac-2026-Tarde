import { input, number } from "@inquirer/prompts"

let nome = await input({message: "Digite o nome do funcionário"})
let cpf = await input({message: "Digite o cpf do funcionário"})
let cargo =  await input({message: "Digite o cargo do funcionário"})
let departamento = await input({message: "Digite o departamento do funcionário"})
let salario = await number({message: "Digite o salário do funcionário", step:0.01})



if (!nome || !cpf || !cargo || !departamento || !salario){
    console.error("TODOS OS CAMPOS PRECISAM SER PREENCHIDOS!")
}

if (cpf.length !== 11){
    console.error("O CPF PRECISA TER EXATAMENTE 11 DIGITOS")
}

if (salario < 1621){
    console.error("O SALÁRIO DECLARADO É INVÁLIDO. VALOR MÍNIMO DO SALÁRIO DEVE SER R$ 1.621,00")
}

console.log(`
FICHA DO FUNCIONÁRIO:

Nome: ${nome}

CPF: ${cpf.slice(0,3)}.${cpf.slice(3,6)}.${cpf.slice(6,9)}-${cpf.slice(9,11)}

Cargo: ${cargo}

Departamento: ${departamento}

Salário: ${salario.toLocaleString("pt-BR", {style:"currency", currency:"BRL"})}
    
`)