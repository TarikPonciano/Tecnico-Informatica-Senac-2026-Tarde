import { input, number } from "@inquirer/prompts"
while (true) {
    let nome
    let cargo
    let salario
    let departamento
    let cpf

    while (true) {
        nome = await input({ message: "Digite o nome do funcionário" })
        if (!nome) {
            console.error("NOME VAZIO DETECTADO. TENTE NOVAMENTE")
        } else {
            break
        }
    }

    while (true) {
        cpf = await input({ message: "Digite o cpf do funcionário" })

        if (cpf.length !== 11) {
            console.error("CPF COM TAMANHO INADEQUADO DETECTADO. CPF PRECISA CONTER 11 DIGITOS.")
        }
        else {
            break
        }

    }

    while (true) {
        cargo = await input({ message: "Digite o cargo do funcionário" })

        if (!cargo) {
            console.error("CARGO VAZIO DETECTADO. TENTE NOVAMENTE")
        } else {
            break
        }
    }

    while (true) {
        departamento = await input({ message: "Digite o departamento do funcionário" })

        if (!departamento) {
            console.error("DEPARTAMENTO VAZIO DETECTADO. TENTE NOVAMENTE")
        } else {
            break
        }
    }

    while (true) {
        salario = await number({ message: "Digite o salário do funcionário", step: 0.01 })
        if (salario < 1621) {
            console.error("VALOR DE SALÁRIO DIGITADO É INVÁLIDO. SALÁRIO MÍNIMO É R$ 1.621,00")
        } else {
            break
        }

    }

    console.log(`
FICHA DO FUNCIONÁRIO:

Nome: ${nome}

CPF: ${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6, 9)}-${cpf.slice(9, 11)}

Cargo: ${cargo}

Departamento: ${departamento}

Salário: ${salario.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
    
`)
}