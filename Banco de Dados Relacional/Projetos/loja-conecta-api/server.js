import 'dotenv/config';
import { readFileSync } from 'fs';
import PG from 'pg';
import express from 'express';

const pool = new PG.Pool(
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        ssl: {
            rejectUnauthorized: true,
            ca: readFileSync('./ca.pem').toString()
        }
    }
)

const app = express()

app.use(express.json()) 

app.post("/pedidos", async (req, res) => {
    const { cod_cliente, itens } = req.body

    if (!cod_cliente || itens.length == 0) {
        return res.status(400).json({ message: "Faltam informações para cadastrar o pedido." })
    }

    let client

    try {
        client = await pool.connect()

        console.log("CONECTADO")

        await client.query("BEGIN;")

        console.log("TRANSAÇÃO INICIADA")

        const pedido = await client.query("INSERT INTO pedidos VALUES (default, $1, default) RETURNING cod_pedido;", [cod_cliente])

        console.log("PEDIDO INSERIDO")

        const cod_pedido = pedido.rows[0].cod_pedido


        for (const produto of itens){
            const dados_produto = await client.query("SELECT preco FROM produtos WHERE cod_produto = $1;", [produto.cod_produto])

            const preco_produto = dados_produto.rows[0].preco
            console.log("PREÇO CONSULTADO")

            await client.query("UPDATE produtos SET estoque = estoque - $1 WHERE cod_produto = $2;",[produto.qtd, produto.cod_produto])

            await client.query("INSERT INTO itens_pedido VALUES (default, $1, $2, $3, $4);", [cod_pedido, produto.cod_produto, produto.qtd, preco_produto])

            console.log("ITEM CADASTRADO")

            

            console.log("CADASTRO ATUALIZADO")


        }

        await client.query("COMMIT;")

        return res.status(201).json({ message: "VENDA CADASTRADA COM SUCESSO" })


    } catch (erro) {
        
        console.log(erro)
        if (client) {
            await client.query("ROLLBACK;")
        }
        return res.status(500).json({ message: "Aconteceu um problema ao cadastrar a venda", erro: erro })

    } finally {
        if (client) {
           await client.release()
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