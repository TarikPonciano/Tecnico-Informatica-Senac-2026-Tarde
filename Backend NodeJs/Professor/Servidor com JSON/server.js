import express from "express";
import {readFile, writeFile} from "node:fs/promises";

const ARQUIVO = "./contatos.json"

async function lerContatos(){
    let texto = await readFile(ARQUIVO, "utf-8")

    return JSON.parse(texto)
}

async function salvarContatos(contatos){
    let texto = JSON.stringify(contatos, null, 4)

    await writeFile(ARQUIVO, texto, {encoding:"utf-8"})
}





