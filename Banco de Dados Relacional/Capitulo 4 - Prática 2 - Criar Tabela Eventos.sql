CREATE TABLE eventos (
cod_evento INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
titulo_evento VARCHAR(80) NOT NULL,
data_evento DATE NOT NULL,
local_evento VARCHAR(60),
vagas_evento INTEGER NOT NULL DEFAULT 30,
inscricoes_abertas_evento BOOLEAN NOT NULL DEFAULT TRUE
);

INSERT INTO eventos(cod_evento, titulo_evento, data_evento, local_evento)
VALUES (default, 'Feira da Tecnologia', '2026-11-20', 'Pátio'),
(default, 'Palestra: Carreira em Dados', '2026-11-25', null);

SELECT * FROM eventos;

-- 1. Guardar o nome do responsável pelo evento (texto até 100).

ALTER TABLE eventos
ADD COLUMN responsavel_evento varchar(100) NOT NULL DEFAULT 'SEM RESPONSÁVEL';

-- 2. Alguns títulos são longos: o título passa a aceitar 150 caracteres.

ALTER TABLE eventos
ALTER COLUMN titulo_evento TYPE varchar(150);