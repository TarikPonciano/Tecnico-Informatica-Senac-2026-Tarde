import { number } from "@inquirer/prompts"

let somaNotas = 0

for (let i = 1; i <= 4; i++){
    const nota = await number({message:`Digite a nota ${i}: `, step:0.1})

    somaNotas += nota
}

const media = somaNotas/4

let situacao = "Indefinido"

if (media >= 7 && media <= 10){
    situacao = "Aprovado"
} else if (media >= 4 && media < 7){
    situacao = "Recuperação"
} else if (media >= 0 && media < 4){
    situacao = "Reprovado"
} else{
    situacao = "VALOR DE MÉDIA INVÁLIDA"
}

console.log(`
RESULTADO ESCOLAR

Média - ${media.toFixed(1)}
Situação - ${situacao}
    
    `)