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


app.listen(3000, () => {
    console.log("SERVIDOR INICIADO EM http://localhost:3000")
})