-- 1. Todos os produtos com o nome da categoria, em ordem alfabética, inclusive os que não têm categoria.

SELECT pr.nome_produto, cat.nome_categoria
FROM produtos pr
LEFT JOIN categorias cat ON cat.cod_categoria = pr.cod_categoria
ORDER BY pr.nome_produto ASC;

-- 2. Os pedidos com o nome e a cidade do cliente, do mais antigo ao mais recente.

SELECT p.cod_pedido, c.nome_cliente, c.cidade_cliente, p.data_pedido
FROM pedidos p
LEFT JOIN clientes c ON c.cod_cliente = p.cod_cliente
ORDER BY p.data_pedido ASC;

-- 3. Os itens do pedido 100: produto, quantidade e preço pago.

SELECT i.cod_pedido, pr.nome_produto, i.qtd,
i.preco_unit, CONCAT('R$ ',(i.qtd *i.preco_unit)) AS "Subtotal"
FROM itens_pedido i
JOIN produtos pr ON pr.cod_produto = i.cod_produto
WHERE i.cod_pedido = 100;


-- SELECT SUM(i.qtd * i.preco_unit)
-- FROM itens_pedido i
-- JOIN produtos pr ON pr.cod_produto = i.cod_produto
-- WHERE i.cod_pedido = 100;

-- 4. Tudo o que a Mariana Costa comprou: pedido, data e produto.
-- Dica: 4 tabelas.

SELECT c.nome_cliente, p.cod_pedido, p.data_pedido, pr.nome_produto
FROM clientes c
JOIN pedidos p ON p.cod_cliente = c.cod_cliente
JOIN itens_pedido i ON i.cod_pedido = p.cod_pedido
JOIN produtos pr ON pr.cod_produto = i.cod_produto
WHERE c.nome_cliente = 'Mariana Costa';

-- 5. Os pedidos cancelados, com o nome do cliente e os produtos.

SELECT p.cod_pedido, c.nome_cliente, pr.nome_produto, p.status
FROM pedidos p
JOIN clientes c ON c.cod_cliente = p.cod_cliente
JOIN itens_pedido i ON i.cod_pedido = p.cod_pedido
JOIN produtos pr ON pr.cod_produto = i.cod_produto
WHERE p.status ILIKE 'cancelado';

-- 6. Os clientes que nunca fizeram pedido.
SELECT DISTINCT c.nome_cliente
FROM clientes c
LEFT JOIN pedidos p ON p.cod_cliente = c.cod_cliente
WHERE p.cod_pedido IS NULL;

-- 7. Os produtos que nunca foram vendidos.

SELECT DISTINCT pr.nome_produto
FROM produtos pr
LEFT JOIN itens_pedido i ON i.cod_produto = pr.cod_produto
WHERE i.cod_item IS NULL;

-- 8. Os pedidos sem nenhum item.

SELECT DISTINCT p.cod_pedido
FROM pedidos p
LEFT JOIN itens_pedido i ON i.cod_pedido = p.cod_pedido
WHERE i.cod_item IS NULL;
