import {input, number} from "@inquirer/prompts";

const nomeProduto = await input({message:"Digite o nome do produto: ", required:true})

const precoProduto = await number({message:"Digite o preço do produto: ", step:0.01, required:true})

const qtdProduto = await number({message:"Digite a quantidade do produto: ", required:true})

const totalBruto = precoProduto * qtdProduto

let desconto = 0

if (totalBruto > 1000){
    desconto = 0.2
} else if (totalBruto > 500 && totalBruto <= 1000){
    desconto = 0.15
} else if (totalBruto > 200 && totalBruto <= 500){
    desconto = 0.1
}

const totalFinal = totalBruto * (1 - desconto)

console.log(`
RECIBO DA VENDA

PRODUTO: ${nomeProduto}
PREÇO: R$ ${precoProduto.toFixed(2)}
QUANTIDADE: ${qtdProduto}

SUB-TOTAL: R$ ${totalBruto.toFixed(2)}
DESCONTO: -R$ ${(totalBruto * desconto).toFixed(2)}

TOTAL: R$ ${totalFinal.toFixed(2)}

    `)