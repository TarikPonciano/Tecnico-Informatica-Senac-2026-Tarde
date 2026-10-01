import { input, select } from "@inquirer/prompts";

console.log(`
BEM VINDO AO JOGO DAS CHARADAS

ESCOLHA UMA CHARADA:

1. Charada 1
2. Charada 2
3. Charada 3
    `)

const op = await input({ message: "Digite o número da charada desejado:" })


if (op == "1") {
    console.log("O que é, o que é, entra mole e balançando e sai duro e pingando:")

    const palpite = await input({ message: "Digite o seu palpite:" })

    if (palpite == "corda do balde do poço") {
        console.log("Você acertou!")
    } else {
        console.log("Não é nada disso que você está pensando!")
    }

} else if (op == "2") {
    console.log("O que é, o que é, dá muitas voltas e não sai do lugar:")

    const palpite = await input({ message: "Digite o seu palpite:" })

    if (palpite == "relógio") {
        console.log("Você acertou!")
    } else {
        console.log("Você errou!")
    }
} else if (op == "3"){
    console.log("O que é, o que é, quanto mais tira maior fica:")

    const palpite = await input({ message: "Digite o seu palpite:" })

    if (palpite == "buraco") {
        console.log("Você acertou!")
    } else {
        console.log("Você errou!")
    }
} else {
    console.log("ESCOLHA UMA OPÇÃO VÁLIDA")
}