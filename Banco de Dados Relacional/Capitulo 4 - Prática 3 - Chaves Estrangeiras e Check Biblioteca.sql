ALTER TABLE livro
ADD CONSTRAINT fk_livro_editora FOREIGN KEY (editora_cod) 
REFERENCES editora (cod_editora);

INSERT INTO livro
VALUES (30, 'Memórias Póstumas', '123564', 1990, 9);