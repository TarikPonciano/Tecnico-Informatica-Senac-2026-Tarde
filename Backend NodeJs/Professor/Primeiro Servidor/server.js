// Para iniciar o servidor, execute no terminal: node server.js

// Importa o framework Express para criar o servidor
import express from "express"

// Cria uma instância da aplicação Express
const app = express()

// Define uma rota GET para a página inicial
app.get("/", (req, res) => {
    // Envia uma resposta em HTML quando a rota é acessada
    res.send("<h1>SEJA BEM VINDO</h1> <p>Este é meu primeiro servidor</p>")
})

// Inicia o servidor na porta 3000
app.listen(3000, () =>{
    // Exibe no terminal o endereço para acessar o servidor
    console.log("SERVIDOR RODANDO NO ENDEREÇO http://localhost:3000")
})