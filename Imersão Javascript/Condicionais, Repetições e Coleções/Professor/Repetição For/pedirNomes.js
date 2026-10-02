import { input } from "@inquirer/prompts"
let mensagemFinal = ""
for (let i = 1; i <= 5; i++) {
    const nome = await input({message:`Digite o nome do usuário ${i}: `})

    console.log(`Seja bem vindo, ${nome}.`)

    if (i == 5){
        mensagemFinal += `${i}. ${nome}`
    }else{
        mensagemFinal += `${i}. ${nome}\n`
    }
}

console.log(mensagemFinal)

