import 'dotenv/config';
import { readFileSync } from 'fs';
import PG from 'pg';
import express from 'express';

const pool = new PG.Pool(
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        ssl: {
            rejectUnauthorized: true,
            ca: readFileSync('./ca.pem').toString()
        }
    }
)

const app = express()

app.use(express.json())

// Inicializar um servidor express e criar uma rota que exibe a versão do servidor do Postgresql

app.get("/versao", async (req, res) => {

    try{
        const resultado = await pool.query("SELECT VERSION();")

        res.status(200).send(resultado.rows[0].version)

    }catch (error){
        console.log(error)
        res.status(500).json({message: "ERRO INTERNO DO SERVIDOR", error: error})
    }

})

// Crie uma rota que exibe no navegador a lista de livros do banco de dados como json

app.get("/livros", async (req,res) => {
    try {
        const resultado = await pool.query("SELECT * FROM LIVROS;")
        res.status(200).json(resultado.rows)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "ERRO INTERNO DO SERVIDOR", error: error})
    }
})

// Implementem a rota de ver livro específico por id e monte a consulta de forma que seja possível ver o nome do genero do livro

app.get("/livros/:id", async (req, res) => {
    try {
        const valores = [req.params.id]
        const sql = `
        SELECT l.id_livro, l.titulo_livro, l.autor_livro, l.ano_livro, l.exemplares_livro, l.genero_id, g.nome_genero FROM LIVROS l
        JOIN generos g ON g.id_genero = l.genero_id
        WHERE id_livro = $1;
        `
        const resultado = await pool.query(sql, valores)

        if (resultado.rows.length === 0){
            return res.status(404).json({message:"GENERO NÃO ENCONTRADO"})
        }

        res.status(200).json(resultado.rows[0])

        
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "ERRO INTERNO DO SERVIDOR", error: error})
    }
})


app.get("/generos", async (req,res) => {
    try {
        const resultado = await pool.query("SELECT * FROM GENEROS;")
        res.status(200).json(resultado.rows)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "ERRO INTERNO DO SERVIDOR", error: error})
    }
})

app.get("/generos/:id", async (req, res) => {
    try {
        const valores = [req.params.id]
        const sql = `
        SELECT * FROM GENEROS
        WHERE id_genero = $1;
        `
        const resultado = await pool.query(sql, valores)

        if (resultado.rows.length === 0){
            return res.status(404).json({message:"GENERO NÃO ENCONTRADO"})
        }

        res.status(200).json(resultado.rows[0])

        
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "ERRO INTERNO DO SERVIDOR", error: error})
    }
})




app.listen(3000, () => {
    console.log("SERVIDOR INICIADO EM http://localhost:3000")
})


// Código para encerrar as conexões com o banco de forma segura
async function encerrar() {
    await pool.end()
    console.log("CONEXÃO FINALIZADA COM SUCESSO")
    process.exit(0)
}

process.on("SIGINT", encerrar)
process.on("SIGTERM", encerrar)