import { input, number } from "@inquirer/prompts"

let numeros = []

for (let i = 0; i < 5; i++){
    let novoNumero = await number({message:`Digite o ${i+1}º numero:`})
    
    numeros.push(novoNumero)

}

//Caso deseje organizar em ordem crescente (EXTRA)
numeros.sort((a,b) => a-b)

console.log("Números cadastrados:", numeros)

