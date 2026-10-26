// Para iniciar o servidor, execute no terminal: node server.js

// Importa o framework Express para criar o servidor
import express from "express"

// Cria uma instância da aplicação Express
const app = express()

app.use((req, res, next) => {
    console.log("REQUISIÇÃO DETECTADA: ", req.method, req.url)
    next()
})

app.use(express.json())

let alunos = [
    { id: 1, nome: 'Ana', turma: 'TDS-01' },
    { id: 2, nome: 'Bruno', turma: 'TDS-01' }
];
let proximoId = 3;

// Define uma rota GET para a página inicial
app.get("/", (req, res) => {
    // Envia uma resposta em HTML quando a rota é acessada
    res.send("<h1>SEJA BEM VINDO</h1> <p>Este é meu primeiro servidor</p>")
})

app.get("/sobre", (req, res) => {
    res.json({
        nome: "Tarik Ponciano",
        curso: "Técnico de Informática",
        projeto: "Meu Primeiro Servidor",
        versao: 1
    })
})

app.get("/alunos", (req, res) => {
    res.status(200).json(alunos)
})

app.get("/alunos/:id", (req, res) => {
    let idAluno = Number(req.params.id)

    let aluno = alunos.find((a) => a.id === idAluno)

    if (aluno){
        res.status(200).json(aluno)
    }else {
        res.status(404).json({
            message:"ERRO NA REQUISIÇÃO",
            error:"ALUNO NÃO ENCONTRADO"
        })
    }
    
})

// Inicia o servidor na porta 3000
app.listen(3000, () => {
    // Exibe no terminal o endereço para acessar o servidor
    console.log("SERVIDOR RODANDO NO ENDEREÇO -> http://localhost:3000")
})