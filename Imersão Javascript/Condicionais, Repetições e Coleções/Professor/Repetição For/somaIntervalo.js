import { number } from "@inquirer/prompts"

let minimo = await number({message:"Digite um número:"})

let maximo = await number({message:"Digite um número:"})

let soma = 0

if (minimo > maximo){
    let aux = minimo 
    minimo = maximo
    maximo = aux
}

for (let i = minimo; i <= maximo; i++){
    soma += i;
}

console.log("Soma: ", soma)