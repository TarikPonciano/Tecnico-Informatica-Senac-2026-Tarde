-- 1. Cadastre a editora 4: Editora Nordeste, de Fortaleza.
SELECT * FROM editora;

INSERT INTO editora
VALUES (4, 'Editora Nordeste', 'Fortaleza');

-- 2. Cadastre o livro 15: Algoritmos em Python , 2024, ISBN 9786500000106, editora 4.

INSERT INTO livro (cod_livro, titulo_livro, ano_livro, isbn_livro, editora_cod)
VALUES(15, 'Algoritmos em Python', 2024, '9786500000106', 4);

-- 3. Registre o empréstimo 6: livro 15 para a Júlia (2), informando só o código, o livro e o leitor.

SELECT * FROM emprestimo;

INSERT INTO emprestimo (cod_emprestimo, livro_cod, leitor_cod)
VALUES (6, 15, 2);