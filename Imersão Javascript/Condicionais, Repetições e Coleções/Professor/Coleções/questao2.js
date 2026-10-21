import { input, number } from "@inquirer/prompts"

// Objeto inicial que representa um produto e seus dados cadastrados.
const produto = { nome: 'Fone de ouvido', preco: 80, estoque: 12 };

// Template literal permite montar um texto em várias linhas e inserir valores do objeto.
// toLocaleString formata o preço como moeda brasileira (BRL).
console.log(`
    FICHA DO PRODUTO:

    Nome: ${produto["nome"]}
    Preço: ${produto["preco"].toLocaleString("pt-BR", {style:"currency", currency:"BRL"})}
    Estoque: ${produto["estoque"]}
    
    `)

// step: 0.01 permite informar valores decimais em incrementos de centavos.
let novoPreco = await number({message:"Digite o novo preço: ", step:0.01})

// Aqui poderiam ser feitas validações, por exemplo, impedir um preço menor ou igual a zero.

// Atualiza a propriedade preco do objeto com o valor digitado.
produto["preco"] = novoPreco

// Lê a quantidade de unidades vendidas para calcular o estoque restante.
let unidadesVendidas = await number({message:"Digite quantas unidades foram vendidas:"})

// O novo estoque é o estoque atual menos a quantidade vendida.
let novoEstoque = produto["estoque"] - unidadesVendidas

// Aqui poderiam ser feitas validações para evitar vendas acima do estoque disponível.

// Atualiza o estoque e acrescenta ao objeto uma propriedade de categoria.
produto["estoque"] = novoEstoque

produto["categoria"] = "Eletrônicos"

// Mostra novamente os dados do produto, agora com as alterações realizadas.
console.log(`
    FICHA DO PRODUTO:

    Nome: ${produto["nome"]}
    Categoria: ${produto["categoria"]}
    Preço: ${produto["preco"].toLocaleString("pt-BR", {style:"currency", currency:"BRL"})}
    Estoque: ${produto["estoque"]}
    
    `)

// Compara o estoque restante com zero; === verifica também se o tipo do valor é igual.
if (produto["estoque"] === 0){
    console.log("SEM ESTOQUE DO PRODUTO SELECIONADO")
}

