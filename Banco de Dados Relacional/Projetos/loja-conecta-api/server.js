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