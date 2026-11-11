ALTER TABLE livro
ADD CONSTRAINT fk_livro_editora FOREIGN KEY (editora_cod) 
REFERENCES editora (cod_editora);

INSERT INTO livro
VALUES (30, 'Memórias Póstumas', '123564', 1990, 9);

SELECT * FROM emprestimo;

ALTER TABLE emprestimo
ADD CONSTRAINT fk_emp_livro FOREIGN KEY (livro_cod)
REFERENCES livro (cod_livro);

INSERT INTO emprestimo (cod_emprestimo, livro_cod, leitor_cod)
VALUES(7, 99, 1);

ALTER TABLE emprestimo
ADD CONSTRAINT fk_emp_leitor FOREIGN KEY (leitor_cod)
REFERENCES leitor (cod_leitor);

INSERT INTO emprestimo (cod_emprestimo, livro_cod, leitor_cod)
VALUES (7, 11, 99);

ALTER TABLE emprestimo
ADD CONSTRAINT ck_renovacoes_validas CHECK (renovacoes_emprestimo BETWEEN 0 AND 3);

UPDATE emprestimo
SET renovacoes_emprestimo = renovacoes_emprestimo + 1
WHERE cod_emprestimo = 2;

ALTER TABLE emprestimo
ADD CONSTRAINT ck_devolucao_valida CHECK (data_devolucao_emprestimo >= data_retirada_emprestimo);

ALTER TABLE emprestimo
ALTER COLUMN leitor_cod SET NOT NULL;

ALTER TABLE emprestimo
ALTER COLUMN livro_cod SET NOT NULL;