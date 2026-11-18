// setup.js · Loja Conecta
// Monta o banco loja do Capítulo 4, agora com os códigos gerados pelo banco.
// Pode rodar quantas vezes quiser: apaga e recria tudo do zero.
//
// Antes de rodar:
//   1. Crie o banco loja (pgAdmin → Databases → Create → Database).
//   2. .env com DB_NAME=loja e ca.pem na pasta do projeto (Aiven).
//   3. node setup.js

import 'dotenv/config';
import { readFileSync } from 'fs';
import pg from 'pg';

const pool = new pg.Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  ssl: {
    rejectUnauthorized: true,
    ca: readFileSync('./ca.pem').toString()
  }
});

// ===================================================================
// 1) Criar: pais antes dos filhos
// ===================================================================
// GENERATED ALWAYS AS IDENTITY: o banco gera o código, ninguém escolhe.
// START WITH faz o contador começar onde o Capítulo 4 começava:
// produtos em 10 e pedidos em 100. Os dados ficam iguais aos do SQL.

const sqlCategorias = `
  CREATE TABLE categorias (
    cod_categoria  integer     GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    nome_categoria varchar(40) NOT NULL UNIQUE
  )`;

// cod_categoria sem NOT NULL: um produto pode ser cadastrado antes de ter categoria.
const sqlProdutos = `
  CREATE TABLE produtos (
    cod_produto   integer      GENERATED ALWAYS AS IDENTITY (START WITH 10) PRIMARY KEY,
    nome_produto  varchar(80)  NOT NULL,
    preco         numeric(8,2) NOT NULL CONSTRAINT ck_preco CHECK (preco >= 0),
    estoque       integer      NOT NULL DEFAULT 0 CONSTRAINT ck_estoque CHECK (estoque >= 0),
    cod_categoria integer      CONSTRAINT fk_prod_categoria REFERENCES categorias (cod_categoria)
  )`;

const sqlClientes = `
  CREATE TABLE clientes (
    cod_cliente    integer      GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    nome_cliente   varchar(100) NOT NULL,
    email_cliente  varchar(100) NOT NULL UNIQUE,
    cidade_cliente varchar(60)  NOT NULL
  )`;

// Todo pedido é de um cliente (NOT NULL + FK). O status só aceita os 4 valores da lista.
const sqlPedidos = `
  CREATE TABLE pedidos (
    cod_pedido  integer     GENERATED ALWAYS AS IDENTITY (START WITH 100) PRIMARY KEY,
    cod_cliente integer     NOT NULL CONSTRAINT fk_ped_cliente REFERENCES clientes (cod_cliente),
    data_pedido date        NOT NULL DEFAULT CURRENT_DATE,
    status      varchar(10) NOT NULL DEFAULT 'aberto'
                CONSTRAINT ck_status CHECK (status IN ('aberto', 'enviado', 'entregue', 'cancelado'))
  )`;

// itens_pedido é a tabela do N:N entre pedidos e produtos.
// preco_unit é o preço na hora da venda: o preço do produto pode mudar depois.
// ON DELETE CASCADE: item não faz sentido sem o pedido.
// UNIQUE do par: o mesmo produto não aparece duas vezes no mesmo pedido (aumenta a qtd).
const sqlItens = `
  CREATE TABLE itens_pedido (
    cod_item    integer      GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    cod_pedido  integer      NOT NULL CONSTRAINT fk_item_pedido REFERENCES pedidos (cod_pedido) ON DELETE CASCADE,
    cod_produto integer      NOT NULL CONSTRAINT fk_item_produto REFERENCES produtos (cod_produto),
    qtd         integer      NOT NULL CONSTRAINT ck_qtd CHECK (qtd > 0),
    preco_unit  numeric(8,2) NOT NULL CONSTRAINT ck_preco_unit CHECK (preco_unit >= 0),
    CONSTRAINT uq_item_pedido_produto UNIQUE (cod_pedido, cod_produto)
  )`;

// ===================================================================
// 2) Dados: pais antes dos filhos, sem os códigos
// ===================================================================
// A ORDEM das linhas decide o código de cada uma:
// categorias 1 a 4, produtos 10 a 16, clientes 1 a 6, pedidos 100 a 107, itens 1 a 11.

const dadosCategorias = `
  INSERT INTO categorias (nome_categoria) VALUES
    ('Informática'),
    ('Celulares'),
    ('Acessórios'),
    ('Games')`;                                          // 4: sem nenhum produto

const dadosProdutos = `
  INSERT INTO produtos (nome_produto, preco, estoque, cod_categoria) VALUES
    ('Notebook Lume 14',  3499.00,  5, 1),               -- 10
    ('Monitor 24 pol',     899.90,  8, 1),               -- 11
    ('Smartphone Nova X', 1899.00, 10, 2),               -- 12
    ('Fone Bluetooth',     199.90, 25, 3),               -- 13
    ('Capa para celular',   49.90, 40, 3),               -- 14
    ('Mouse sem fio',       89.90, 30, 3),               -- 15: nunca vendido
    ('Cabo HDMI',           39.90, 50, NULL)`;           // 16: sem categoria

const dadosClientes = `
  INSERT INTO clientes (nome_cliente, email_cliente, cidade_cliente) VALUES
    ('Mariana Costa',  'mariana@email.com', 'Recife'),
    ('Rafael Torres',  'rafael@email.com',  'Olinda'),
    ('Paula Nogueira', 'paula@email.com',   'Recife'),
    ('Tiago Freire',   'tiago@email.com',   'Jaboatão'),
    ('Lívia Campos',   'livia@email.com',   'Recife'),
    ('Gustavo Ramos',  'gustavo@email.com', 'Paulista')`; // 6: nunca fez pedido

const dadosPedidos = `
  INSERT INTO pedidos (cod_cliente, data_pedido, status) VALUES
    (1, '2026-09-02', 'entregue'),                       -- 100
    (2, '2026-09-05', 'entregue'),                       -- 101
    (1, '2026-09-10', 'entregue'),                       -- 102
    (3, '2026-09-18', 'enviado'),                        -- 103
    (4, '2026-09-25', 'cancelado'),                      -- 104
    (5, '2026-10-01', 'entregue'),                       -- 105
    (3, '2026-10-03', 'aberto'),                         -- 106
    (1, '2026-10-05', 'aberto')`;                        // 107: sem nenhum item

const dadosItens = `
  INSERT INTO itens_pedido (cod_pedido, cod_produto, qtd, preco_unit) VALUES
    (100, 10, 1, 3499.00),
    (100, 13, 2,  199.90),
    (101, 12, 1, 1899.00),
    (101, 14, 1,   49.90),
    (102, 13, 1,  179.90),                               -- fone em promoção
    (103, 11, 2,  899.90),
    (103, 16, 1,   39.90),                               -- o cabo sem categoria
    (104, 12, 1, 1899.00),                               -- pedido cancelado
    (105, 10, 1, 3299.00),                               -- notebook com desconto
    (105, 14, 3,   49.90),
    (106, 13, 1,  199.90)`;

// ===================================================================
// 3) Conferência: esperado 4 categorias, 7 produtos, 6 clientes, 8 pedidos e 11 itens
// ===================================================================

const sqlConferencia = `
  SELECT
    (SELECT count(*) FROM categorias)   AS categorias,
    (SELECT count(*) FROM produtos)     AS produtos,
    (SELECT count(*) FROM clientes)     AS clientes,
    (SELECT count(*) FROM pedidos)      AS pedidos,
    (SELECT count(*) FROM itens_pedido) AS itens`;

try {
  // 1. apaga as tabelas antigas: filhos antes dos pais
  await pool.query('DROP TABLE IF EXISTS itens_pedido');
  await pool.query('DROP TABLE IF EXISTS pedidos');
  await pool.query('DROP TABLE IF EXISTS clientes');
  await pool.query('DROP TABLE IF EXISTS produtos');
  await pool.query('DROP TABLE IF EXISTS categorias');
  console.log('Tabelas antigas removidas.');

  // 2. cria as tabelas: pais antes dos filhos
  await pool.query(sqlCategorias);
  await pool.query(sqlProdutos);
  await pool.query(sqlClientes);
  await pool.query(sqlPedidos);
  await pool.query(sqlItens);
  console.log('Tabelas criadas.');

  // 3. insere os dados: pais antes dos filhos
  await pool.query(dadosCategorias);
  await pool.query(dadosProdutos);
  await pool.query(dadosClientes);
  await pool.query(dadosPedidos);
  await pool.query(dadosItens);
  console.log('Dados inseridos.');

  // 4. confere as quantidades
  const resultado = await pool.query(sqlConferencia);
  console.log(resultado.rows[0]);
} catch (erro) {
  console.error('Erro no setup:', erro.message);
} finally {
  await pool.end();
  console.log('Conexões fechadas.');
}
