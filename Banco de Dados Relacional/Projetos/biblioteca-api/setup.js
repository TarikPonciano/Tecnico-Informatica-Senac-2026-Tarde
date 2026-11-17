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

const sqlCriarGenero = `
        CREATE TABLE generos(
        id_genero serial PRIMARY KEY,
        nome_genero VARCHAR(40) NOT NULL);
        `
const sqlCriarLivro = `
        CREATE TABLE livros(
        id_livro serial Primary Key,
        titulo_livro varchar(100) NOT NULL,
        autor_livro varchar(80) NOT NULL,
        ano_livro integer NOT NULL DEFAULT 2026,
        exemplares_livro integer NOT NULL DEFAULT 0,
        genero_id integer NOT NULL,
        CONSTRAINT fk_livros_generos FOREIGN KEY (genero_id) REFERENCES generos (id_genero)    
        );
`

const dadosGeneros = `
INSERT INTO generos (nome) VALUES
('Romance'),
('Fantasia'),
('Ficção científica')`;
const dadosLivros = `
INSERT INTO livros (titulo, autor, ano, exemplares, genero_id) VALUES
('Dom Casmurro', 'Machado de Assis', 1899, 3, 1),
('Iracema', 'José de Alencar', 1865, 2, 1),
('O Hobbit', 'J. R. R. Tolkien', 1937, 4, 2),
('O Pequeno Príncipe', 'Saint-Exupéry', 1943, 5, 2),
('Duna', 'Frank Herbert', 1965, 2, 3),
('Eu, Robô', 'Isaac Asimov', 1950, 3, 3)`;

try {

    // Derrubar as tabelas que existem
    await pool.query("DROP TABLE IF EXISTS livros;")
    await pool.query("DROP TABLE IF EXISTS generos;")

    console.log("TABELAS REMOVIDAS COM SUCESSO")

    // Criação das novas tabelas
    await pool.query(sqlCriarGenero)
    await pool.query(sqlCriarLivro)

    console.log("TABELAS CRIADAS COM SUCESSO")

    // Inserir dados nas tabelas

    await pool.query(dadosGeneros)
    await pool.query(dadosLivros)

} catch (error) {
    console.log("ERRO NA CRIAÇÃO DAS TABELAS")
    console.log(error)
} finally {
    await pool.end()

    console.log("CONEXÃO ENCERRADA")
}