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

app.post("/pedidos", async (req, res) =>{
    const {cod_cliente, itens} = req.body

    if (!cod_cliente || itens.length == 0){
        return res.status(400).json({message: "Faltam informações para cadastrar o pedido."})
    }

    let client

    try {
        client = await pool.connect()

    } catch (erro){
        if (client){
            client.query("ROLLBACK;")
        }
        return res.status(500).json({message:"Aconteceu um problema ao cadastrar a venda"})
        
    } finally {
        if (client){
            client.release()
        }
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