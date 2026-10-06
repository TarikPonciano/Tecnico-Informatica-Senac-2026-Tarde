import { input } from "@inquirer/prompts";

console.log("O que é, o que é, cai em pé e corre deitado:")

const palpite = await input({message:"Digite seu palpite:"})

if (palpite.toUpperCase().trim() == "CHUVA"){
    console.log("Você acertou!")
}else {
    console.log("Você errou!")
}