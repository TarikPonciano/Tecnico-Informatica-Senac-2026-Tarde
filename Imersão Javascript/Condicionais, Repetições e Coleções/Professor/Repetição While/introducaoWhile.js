// for(let i = 1; i <= 10; i++){
//     console.log(i)
// }

// let contador = 1

// while (contador <= 10){
//     console.log(contador)
//     contador++
// }

// Crie um programa que coleta nomes de usuários, até que a pessoa digite SAIR
import {input} from "@inquirer/prompts"
let nome = ""

while(nome != "SAIR"){
    nome = await input({message:"Digite seu nome: "})
    console.log("Seja bem vindo, ", nome)
}