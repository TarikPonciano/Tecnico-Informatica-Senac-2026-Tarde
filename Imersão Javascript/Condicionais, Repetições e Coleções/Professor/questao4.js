import { input, number } from "@inquirer/prompts"

let glossario = {
    
}

while (true) {
    console.log(`
    SEJA BEM VINDO AO GLOSSÁRIO XYZ SENAC

    Menu:

    1 - Cadastrar palavra
    2 - Buscar palavra
    3 - Lista todos

    0 - Sair
    
    `)

    let op = await input({ message: "Digite o número da opção desejada:" })

    if (op === "1") {
        console.log("CADASTRO DE PALAVRA")
    } else if (op === "2") {
        console.log("BUSCAR PALAVRA")
    } else if (op === "3") {
        console.log("LISTAR PALAVRAS")
    } else if (op === "0") {
        console.log("SAINDO DO PROGRAMA")
        break
    } else {
        console.log("DIGITE UMA OPÇÃO VÁLIDA!")
    }

    await input({message:"TECLE ENTER PARA CONTINUAR"})

}