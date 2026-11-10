-- 1. Cadastre a editora 4: Editora Nordeste, de Fortaleza.
SELECT * FROM editora;

INSERT INTO editora
VALUES (4, 'Editora Nordeste', 'Fortaleza');

-- 2. Cadastre o livro 15: Algoritmos em Python , 2024, ISBN 9786500000106, editora 4.

INSERT INTO livro (cod_livro, titulo_livro, ano_livro, isbn_livro, editora_cod)
VALUES(15, 'Algoritmos em Python', 2024, '9786500000106', 4);

-- 3. Registre o empréstimo 6: livro 15 para a Júlia (2), informando só o código, o livro e o leitor.

SELECT * FROM emprestimo
ORDER BY cod_emprestimo;

INSERT INTO emprestimo (cod_emprestimo, livro_cod, leitor_cod)
VALUES (6, 15, 2);

-- 4. A Lia devolveu Dom Casmurro hoje (empréstimo 5): registre a devolução com CURRENT_DATE.

UPDATE emprestimo
SET data_devolucao_emprestimo = CURRENT_DATE
WHERE cod_emprestimo = 5;

-- 5. O Marcos renovou o empréstimo 2: some 1 às renovações.

UPDATE emprestimo 
SET renovacoes_emprestimo = renovacoes_emprestimo + 1
WHERE cod_emprestimo = 2;

-- 6. O Rui (4) mudou de turma: agora é ADM-2.

UPDATE leitor
SET turma_cod = 'ADM-2'
WHERE cod_leitor = 4;

-- 7. O empréstimo 3 foi lançado por engano: remova.

DELETE FROM emprestimo
WHERE cod_emprestimo = 3;

-- 8. O Rui Melo (4) saiu da escola. Exclua o leitor — na ordem certa.

DELETE FROM emprestimo
WHERE leitor_cod = 4;

DELETE FROM leitor
WHERE cod_leitor = 4;

SELECT * FROM emprestimo;