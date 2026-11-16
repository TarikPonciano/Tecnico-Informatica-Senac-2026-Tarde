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