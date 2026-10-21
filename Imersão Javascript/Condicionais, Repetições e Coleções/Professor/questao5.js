import { input, number } from "@inquirer/prompts"

let carrinho = []

while (true) {

    console.log(`
===== CARRINHO =====
1 - Adicionar produto
2 - Ver carrinho
0 - Finalizar compra
        
        `)

    let op = await input({ message: "Digite a opção desejada:" })

    if (op === "1") {

        let nome = await input({ message: "Digite o nome do produto:" })
        let preco = await number({ message: "Digite o preço do produto:", step: 0.01 })
        let quantidade = await number({ message: "Digite a quantidade do produto:" })

        let produto = {
            nome, preco, quantidade
        }

        carrinho.push(produto)

        console.log(carrinho)

    } else if (op === "2") {
        console.log("----- SEU CARRINHO -----")
        for (let i = 0; i < carrinho.length; i++){
            const {nome, preco, quantidade} = carrinho[i] 

            let precoFormatado = preco.toLocaleString("pt-BR", {style:"currency", currency:"BRL"})

            let total = preco * quantidade

            let totalFormatado = total.toLocaleString("pt-BR", {style:"currency", currency:"BRL"})
        
            console.log(`${i+1}. ${nome} - ${precoFormatado} x ${quantidade} = ${totalFormatado}`)
        }

    } else if (op === "0") {

    } else {
        console.warn("Digite uma opção válida!")
    }

    await input({ message: "TECLE ENTER PARA CONTINUAR" })

}

// function transformarEmDinheiro(texto){

//     return texto.toLocaleString("pt-BR", {style:})
// }