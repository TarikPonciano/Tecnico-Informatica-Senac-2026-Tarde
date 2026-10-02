import {number} from "@inquirer/prompts"

let contagemInicial = await number({message:"Digite o inicio da contagem:"})

while(contagemInicial > 0){
    console.log(contagemInicial)
    contagemInicial--
}

console.log("Lançamento")