DROP TABLE IF EXISTS eventos_escola;

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

SELECT * FROM eventos_escola;

-- 1. Guardar o nome do responsável pelo evento (texto até 100).

ALTER TABLE eventos
ADD COLUMN responsavel_evento varchar(100) NOT NULL DEFAULT 'SEM RESPONSÁVEL';

-- 2. Alguns títulos são longos: o título passa a aceitar 150 caracteres.

ALTER TABLE eventos
ALTER COLUMN titulo_evento TYPE varchar(150);

-- 3. A coluna local_evento passa a se chamar sala.

ALTER TABLE eventos
RENAME COLUMN local_evento TO sala_evento;

-- 4. Eventos novos começam com 40 vagas.

ALTER TABLE eventos
ALTER COLUMN vagas_evento SET DEFAULT 40;

-- 5. Guardar o horário , obrigatório, tipo time. Tente primeirosem DEFAULT. O que aconteceu? Resolva com padrão '19:00'.

ALTER TABLE eventos
ADD COLUMN horario_evento TIME NOT NULL DEFAULT '19:00';

-- 6. Desistiram do responsável: apague essa coluna.

ALTER TABLE eventos
DROP COLUMN responsavel_evento;

-- 7. A tabela passa a se chamar eventos_escola. Insira o evento 3, Hackathon, 05/12/2026, e confira com SELECT.

ALTER TABLE eventos
RENAME TO eventos_escola;

INSERT INTO eventos_escola (titulo_evento, data_evento)
VALUES ('Hackathon', '2026-12-05');

-- 8. Fim do semestre: apague a tabela inteira. Rode de novo — e depois com IF EXISTS.

-- DROP TABLE eventos_escola;

