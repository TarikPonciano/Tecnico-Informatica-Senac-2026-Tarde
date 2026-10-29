import express from "express";
import {readFile, writeFile} from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const PASTA = path.dirname(fileURLToPath(import.meta.url))
const ARQUIVO = path.join(PASTA, "contatos.json")

async function lerContatos(){
    let texto = await readFile(ARQUIVO, "utf-8")

    return JSON.parse(texto)
}

async function salvarContatos(contatos){
    let texto = JSON.stringify(contatos, null, 4)

    await writeFile(ARQUIVO, texto, {encoding:"utf-8"})
}


const app = express()

app.use(express.json())

app.listen(3000, () => {
    console.log("SERVIDOR INICIADO NO ENDEREÇO http://localhost:3000")
})



