import {number} from "@inquirer/prompts"

const numero = await number({ message:"Digite um número"})

const numFinal = await number({ message:"Digite o final da tabuada:"})

for (let i = 1; i <= numFinal; i++){
    console.log(`${numero} x ${i} = ${numero*i}`)
}


