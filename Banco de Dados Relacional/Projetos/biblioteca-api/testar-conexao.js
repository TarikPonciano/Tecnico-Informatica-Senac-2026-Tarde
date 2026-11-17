import 'dotenv/config';
import { readFileSync } from 'fs';
import PG from 'pg';



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

try {
    const resultado = await pool.query("SELECT VERSION();")

    console.log(resultado)
    
} catch (error) {
    console.log("Houve um erro na consulta!")
    console.log(error)
    
} finally {
    await pool.end()
    console.log("Conexão encerrada!")

}