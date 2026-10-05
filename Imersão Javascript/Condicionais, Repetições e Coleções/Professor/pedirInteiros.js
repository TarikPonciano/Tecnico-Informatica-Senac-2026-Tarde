//1. Faça um programa que pede 5 números inteiros e exiba sua soma.

import { input, number } from "@inquirer/prompts"

let contador = 0
let soma = 0

while (contador < 5) {
    let numeroInteiro = await number({ message: "Digite um número inteiro não-nulo: " })
    
    soma += numeroInteiro
    contador++
}
console.log(soma)