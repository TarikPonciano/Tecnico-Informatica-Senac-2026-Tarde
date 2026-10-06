// 1. Crie uma variável chamada número secreto que contenha um número entre 0 e 10. Peça para o usuário tentar acertar o número. Caso o usuário acerte imprima uma mensagem de vitória e quando errar imprima uma mensagem de derrota.

// 2. Melhore o jogo, quando o usuário errar imprima uma mensagem informando se o palpite foi maior ou menor que o número secreto.

// 3. Permita ao jogador tentar 3 vezes antes de receber uma mensagem de derrota.

// 4. Ajuste o programa para utilizar um número aleatório como número secreto.

import { number } from "@inquirer/prompts";


const numeroSecreto = Math.floor(Math.random() * 101);

console.log("Bem vindo ao Jogo de Advinhação. Dê um palpite entre 0 e 10 para jogar!")

let palpite = await number({ message: "Digite seu primeiro palpite:", min: 0, max: 100 })

if (palpite === numeroSecreto) {
    console.log(`Você acertou! O número secreto era ${numeroSecreto}!`)
} else {
    console.log("Você errou! :\\")

    if (palpite > numeroSecreto) {
        console.log("Seu chute foi acima do número secreto.")
    } else {
        console.log("Seu chute foi abaixo do número secreto.")
    }

    palpite = await number({ message: "Digite seu segundo palpite:", min: 0, max: 100 })

    if (palpite === numeroSecreto) {
        console.log(`Você acertou! O número secreto era ${numeroSecreto}!`)
    }
    else {
        console.log("Você errou! :\\")

        if (palpite > numeroSecreto) {
            console.log("Seu chute foi acima do número secreto.")
        } else {
            console.log("Seu chute foi abaixo do número secreto.")
        }

        palpite = await number({ message: "Digite seu terceiro palpite:", min: 0, max: 100 })
        if (palpite === numeroSecreto) {
            console.log(`Você acertou! O número secreto era ${numeroSecreto}!`)
        }
        else {
            console.log("Você errou! :\\")

            if (palpite > numeroSecreto) {
                console.log("Seu chute foi acima do número secreto.")
            } else {
                console.log("Seu chute foi abaixo do número secreto.")
            }

            console.log("FIM DAS TENTATIVAS")
            console.log(`O número secreto era: ${numeroSecreto}`)
        }
    }

}