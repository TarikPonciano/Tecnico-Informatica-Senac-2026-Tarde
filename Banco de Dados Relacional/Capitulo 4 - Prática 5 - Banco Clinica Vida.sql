-- 1. Drop Tables

DROP TABLE IF EXISTS consultas, pacientes, medicos, convenios;

-- 2. Criação das Tabelas

CREATE TABLE IF NOT EXISTS medicos (
    cod_med INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    crm_med VARCHAR(6) NOT NULL UNIQUE,
    nome_med VARCHAR (255) NOT NULL,
    especialidade_med VARCHAR (255) NOT NULL
);

CREATE TABLE IF NOT EXISTS convenios (
    cod_conv INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    nome_conv  VARCHAR (255) NOT NULL UNIQUE,
    fone_conv CHAR(11)
);

CREATE TABLE IF NOT EXISTS pacientes (
    cod_pac INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    nome_pac VARCHAR(255) NOT NULL,
    cpf_pac CHAR(11) NOT NULL UNIQUE,
    fone_pac CHAR(11),
    cod_conv INTEGER NOT NULL,
    CONSTRAINT fk_pac_conv FOREIGN KEY (cod_conv) REFERENCES convenios (cod_conv)
);

CREATE TABLE IF NOT EXISTS consultas (
    cod_cons INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    data_cons DATE NOT NULL,
    hora_cons TIME NOT NULL,
    diagnostico_cons TEXT,
    cod_pac INTEGER NOT NULL,
    cod_med INTEGER NOT NULL,
    CONSTRAINT fk_cons_pac FOREIGN KEY (cod_pac) REFERENCES pacientes(cod_pac),
    CONSTRAINT fk_cons_med FOREIGN KEY (cod_med) REFERENCES medicos(cod_med),
    CONSTRAINT chk_hora_valida CHECK (hora_cons BETWEEN '07:00' AND '19:00'),
    CONSTRAINT uk_cons_repetida UNIQUE (cod_med, data_cons, hora_cons)
);

-- 3. Inserção dos dados iniciais do banco

-- 1. Inserindo CONVENIOS
-- Nota: O campo fone_conv é CHAR(11), então removemos os parênteses e o hífen.
INSERT INTO convenios (nome_conv, fone_conv) VALUES
('Saúde Total', '8533331000'),
('Vida Mais', '8533332000'),
('Bem Estar', '8533333000');

-- 2. Inserindo MEDICOS
INSERT INTO medicos (crm_med, nome_med, especialidade_med) VALUES
('12345', 'Helena Duarte', 'Cardiologia'),
('23456', 'Otávio Nunes', 'Clínica Geral'),
('34567', 'Sofia Brandão', 'Dermatologia'),
('45678', 'Caio Ferraz', 'Ortopedia');

-- 3. Inserindo PACIENTES
-- Nota: O campo fone_pac também é CHAR(11), então removemos os parênteses e o hífen.
-- O cpf_pac já estava sem formatação (apenas números), o que está correto.
INSERT INTO pacientes (nome_pac, cpf_pac, fone_pac, cod_conv) VALUES
('Marina Alves', '10120230344', '85988880001', 1),
('João Pedro Lins', '20230340455', '85988880002', 2),
('Beatriz Sales', '30340450566', '85988880003', 1),
('Renato Dias', '40450560677', '85988880004', 2),
('Clara Nogueira', '50560670788', '85988880005', 1);

-- 4. Inserindo CONSULTAS
-- Onde o diagnóstico estava como [null] na imagem, inserimos NULL (sem aspas).
INSERT INTO consultas (data_cons, hora_cons, diagnostico_cons, cod_pac, cod_med) VALUES
('2026-10-05', '08:00', 'Hipertensão leve', 1, 1),
('2026-10-05', '09:00', 'Virose', 2, 2),
('2026-10-06', '14:00', 'Dermatite', 3, 3),
('2026-10-07', '10:00', 'Alergia de contato', 1, 3),
('2026-10-27', '08:00', NULL, 4, 1),
('2026-10-27', '15:00', NULL, 2, 1),
('2026-10-28', '09:30', NULL, 4, 3);

ALTER TABLE consultas
ADD COLUMN valor_cons numeric(10,2) NOT NULL DEFAULT 0 CHECK (valor_cons >= 0);