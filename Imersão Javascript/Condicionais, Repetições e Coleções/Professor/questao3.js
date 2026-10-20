import { input, number } from "@inquirer/prompts"

let gastos = {
    "Alimentação": 1000,
    "Transporte": 600,
    "Moradia": 700

}

let qtdCategorias = await number({ message: "Digite quantas categorias deseja registrar: " })

for (let i = 0; i < qtdCategorias; i++) {
    let nomeCategoria = await input({ message: "Digite a categoria do gasto: " })
    let valorGasto = await number({ message: "Digite o valor do gasto: ", step: 0.01 })


    if (gastos[nomeCategoria]) {
        gastos[nomeCategoria] += valorGasto
    } else {
        gastos[nomeCategoria] = valorGasto
    }
}

console.log("GASTOS DO MÊS")

let totalGasto = 0
let maiorGastoValor = Object.values(gastos)[0]
let maiorGastoCategoria = Object.keys(gastos)[0]

for (const categoria in gastos) {
    console.log(`${categoria} - ${gastos[categoria].toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`)

    totalGasto += gastos[categoria]

    if (gastos[categoria] > maiorGastoValor){
        maiorGastoValor = gastos[categoria]
        maiorGastoCategoria = categoria
    }
}

console.log(`
    GASTO TOTAL: ${totalGasto.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}

    MAIOR GASTO: ${maiorGastoCategoria} - ${maiorGastoValor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
    `)