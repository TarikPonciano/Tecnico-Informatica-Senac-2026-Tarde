SELECT * FROM pedidos
RIGHT JOIN clientes ON clientes.cod_cliente = pedidos.cod_cliente
WHERE pedidos.cod_pedido IS null;

SELECT pedidos.cod_pedido,
clientes.nome_cliente,
pedidos.data_pedido,
pedidos.status
FROM pedidos
JOIN clientes ON clientes.cod_cliente = pedidos.cod_cliente;

SELECT p.cod_pedido, p.data_pedido, pr.nome_produto, i.qtd, i.preco_unit, CONCAT('R$ ',i.qtd * i.preco_unit) AS "Subtotal R$"
FROM itens_pedido i
JOIN pedidos p ON p.cod_pedido = i.cod_pedido
JOIN produtos pr ON pr.cod_produto = i.cod_produto
ORDER BY p.cod_pedido, pr.nome_produto;

SELECT
c.nome_cliente, pr.nome_produto, cat.nome_categoria
FROM
itens_pedido i
JOIN
pedidos p
ON
p.cod_pedido = i.cod_pedido
JOIN
clientes c
ON
c.cod_cliente = p.cod_cliente
JOIN
produtos pr
ON
pr.cod_produto = i.cod_produto
LEFT JOIN
categorias cat
ON
cat.cod_categoria = pr.cod_categoria
ORDER
BY
c.nome_cliente, pr.nome_produto;

SELECT pr.nome_produto, cat.nome_categoria
FROM produtos pr
LEFT JOIN categorias cat ON cat.cod_categoria = pr.cod_categoria
ORDER BY cat.nome_categoria, pr.nome_produto;