# Atividades temáticas em dupla — Aula 2

**Senac · Prof. Tarik Ponciano**

Quatro atividades maiores, uma por bloco de conteúdo (mais o projeto final), para executar em duplas. Cada uma tem um **briefing** (como se fosse um pedido de cliente) e um **checklist de aceite** — critérios objetivos para você (ou os próprios colegas) conferirem a solução. As versões resumidas destes briefings também aparecem projetadas nos slides (`tematica1-brief`/`tematica1-requisitos`, etc.), para as duplas não precisarem de nenhum arquivo.

Todas as soluções de referência abaixo foram **escritas e testadas** (Node 20, terminal real, incluindo os prompts interativos). Elas ficam em `gabarito/` com o mesmo nome do arquivo indicado em cada seção — **não são a única solução correta**: sirvam de gabarito de correção, não de "a resposta oficial".

---

## 1. Balcão de Triagem — Central de Suporte do Senac

**Quando aplicar:** depois do bloco de Condicionais.
**Conceitos praticados:** `if`/`else if`/`else`, `switch`, `&&`/`||`, prompts da aula 1 (`select`, `confirm`).
**Gabarito de referência:** `gabarito/tematica1-balcao-de-triagem.js`

### Briefing

> O Senac abriu uma central de atendimento para dúvidas técnicas (internet, impressoras, sistema acadêmico...). Vocês foram contratados para construir o sistema que direciona cada chamado para o guichê certo, sem intervenção humana na triagem.

**Coleta (use os prompts da aula 1):**

| Pergunta | Prompt | Opções |
| --- | --- | --- |
| A pessoa é aluno(a) matriculado(a)? | `confirm` | sim/não |
| Categoria do problema | `select` | Internet, Impressora, Sistema Acadêmico, Outro |
| Urgência | `select` | Baixa, Média, Alta |

**Regras de roteamento** (aplique NESTA ordem — a primeira que se encaixar, vale):

1. Sem matrícula confirmada → sempre **"Recepção — verificar cadastro"**, não importa o resto.
2. Urgência Alta **e** categoria Sistema Acadêmico → **"Suporte Nível 2 (urgente)"**.
3. Urgência Alta (qualquer outra categoria) → **"Guichê 1 (prioritário)"**.
4. Nos demais casos, direcione por categoria com `switch`: Internet → Guichê 2, Impressora → Guichê 3, Sistema Acadêmico → Guichê 4, Outro → Guichê Geral.
5. Sempre mostre também um **tempo estimado de espera**: Alta = 5 min, Média = 10 min, Baixa = 20 min.

### Checklist de aceite

- [ ] Usa `if`/`else if`/`else` para as regras 1 a 3
- [ ] Usa `&&` na regra 2 (urgência **e** categoria)
- [ ] Usa `switch` para a regra 4
- [ ] Mostra corretamente o tempo estimado de espera

### Casos de teste

| Matriculado? | Categoria | Urgência | Resultado esperado |
| --- | --- | --- | --- |
| Não | (qualquer) | (qualquer) | Recepção — verificar cadastro, 20 min |
| Sim | Sistema Acadêmico | Alta | Suporte Nível 2 (urgente), 5 min |
| Sim | Internet | Alta | Guichê 1 (prioritário), 5 min |
| Sim | Impressora | Média | Guichê 3, 10 min |

---

## 2. Turno de Caixa — Cantina do Senac

**Quando aplicar:** depois do bloco de Repetições.
**Conceitos praticados:** padrão sentinela (`while (true)` + `break`), `if`/`else`, acumuladores.
**Gabarito de referência:** `gabarito/tematica2-turno-de-caixa.js`

### Briefing

> É hora do fechamento de caixa da cantina. Vocês vão programar o sistema que registra as vendas de um turno, uma de cada vez, até o operador encerrar (apertando Enter sem digitar nada no nome do item).

**Para cada venda, pergunte:**

1. Item vendido (`input`) — Enter em branco **encerra o turno**
2. Preço unitário (`number`, com decimais)
3. Quantidade (`number`)

**Regras:**

- Calcule o valor da venda (preço × quantidade).
- **Desconto:** 5 unidades ou mais do MESMO item → 10% de desconto NAQUELE item.
- Vá somando: **total do turno**, **quantidade de vendas** e **quantas tiveram desconto**.
- Ao encerrar, mostre o resumo do turno.
- **Meta:** se o total do turno for R$ 100 ou mais, mostre uma mensagem de "meta batida"; senão, mostre quanto falta.

### Checklist de aceite

- [ ] Usa `while (true)` + `break` para o padrão sentinela
- [ ] Aplica o desconto de 10% só quando a quantidade é ≥ 5
- [ ] Soma corretamente o total, a quantidade de vendas e as vendas com desconto
- [ ] Mostra a mensagem certa de meta batida/faltam R$X

### Caso de teste

Coxinha R$ 6,50 × 2 (sem desconto) + Suco R$ 5,00 × 6 (com desconto: 30 × 0,9 = 27) → **total R$ 40,00**, faltam **R$ 60,00** para a meta.

---

## 3. Estoque — Papelaria do Senac

**Quando aplicar:** depois do bloco de Arrays e Objetos.
**Conceitos praticados:** array de objetos, `if`/`else if` dentro de `for...of`, `filter`, `reduce`, `sort`.
**Gabarito de referência:** `gabarito/tematica3-estoque-da-papelaria.js`

### Briefing

> A papelaria precisa de um sistema simples de controle de estoque. Vocês vão cadastrar os produtos (um a um, até decidirem parar) e gerar um relatório da situação atual.

**Coleta (padrão sentinela):** nome (`input`; nome em branco encerra o cadastro), preço (`number`, com decimais), quantidade em estoque (`number`). Guarde cada produto como um **objeto** dentro de um **array**.

**O relatório final deve mostrar:**

1. A lista de produtos, cada um classificado (`if`/`else if`): **ESGOTADO** (quantidade 0), **BAIXO** (menos de 5) ou **OK**.
2. Os itens que precisam de reposição (`filter`: quantidade < 5).
3. O **valor total** do estoque (soma de preço × quantidade de todos, com `reduce`).
4. O produto **mais caro** (`reduce`).
5. A lista de produtos ordenada do mais barato ao mais caro (`sort`, sem alterar a ordem do array original).

### Checklist de aceite

- [ ] Usa o padrão sentinela para o cadastro
- [ ] Classifica cada item com `if`/`else if` dentro de um `for...of`
- [ ] `filter`, `reduce` e `sort` (com comparador numérico) usados corretamente
- [ ] O `sort` não altera a ordem usada no relatório de classificação (copie antes: `[...estoque].sort(...)`)

### Caso de teste

Caderno R$ 18,90 × 40 (OK) · Mochila R$ 129,90 × 3 (BAIXO) · Lápis R$ 1,50 × 0 (ESGOTADO) → **valor total R$ 1.145,70**; mais caro: **Mochila**.

---

## 4. Projeto integrador — Inscrições do Evento Tech Senac

**Quando aplicar:** fechamento da aula, depois de todo o conteúdo.
**Conceitos praticados:** TUDO da aula — prompts, condicionais, laços, array de objetos, `filter`/`some`/`every`.
**Gabarito de referência:** `gabarito/projeto-inscricoes-evento.js`

### Briefing

> O Senac vai realizar um evento de tecnologia e precisa de um sistema de inscrições no terminal. Este é o projeto que fecha a aula: ele reaproveita literalmente todos os padrões vistos hoje.

**Coleta (padrão sentinela, com DUAS condições de parada):** repita enquanto houver **vagas** (defina um limite pequeno, como 5, para dar para testar) e o nome não vier em branco. Para cada inscrito, pergunte:

1. Nome (`input`)
2. Categoria (`select`: Aluno do Senac, Egresso, Convidado externo)
3. Deseja certificado? (`confirm`)

Guarde cada inscrito como um objeto num array.

**Ao encerrar, o relatório final deve mostrar:**

1. A **lista completa** de inscritos (`for...of` com desestruturação), formatada com `padEnd`.
2. Quantos inscritos há em **cada categoria** (objeto contador, como no exercício de produtos).
3. Quantos **querem certificado** (`filter` + `.length`).
4. **Há** algum convidado externo? (`some`) · **Todos** pediram certificado? (`every`).

### Checklist de aceite

- [ ] Duas condições de parada no `while` (nome vazio OU limite de vagas atingido)
- [ ] Array de objetos com os três campos coletados
- [ ] Contador por categoria correto
- [ ] `filter`, `some` e `every` usados corretamente no relatório

### Caso de teste

3 inscritos — Ana/Aluno/sim, Bia/Egresso/não, Caio/Externo/sim → **2 de 3** com certificado; **há** externo (`true`); **nem todos** pedem certificado (`false`). Com 5 inscritos, deve aparecer a mensagem de evento lotado.

---

## Dicas gerais de condução

- **Deixe os dois slides do briefing projetados** durante toda a atividade (contexto/coleta e regras/checklist).
- **Circule perguntando "o que vocês esperam que aconteça?"** antes de rodar — reforça o raciocínio antes do teste.
- Se uma dupla travar, peça que testem **um caso de cada vez** (o mais simples primeiro) em vez de tentar acertar tudo de uma vez.
- As soluções de referência são **um jeito de resolver, não o único**: aceite variações de nomes de variáveis, ordem das perguntas (desde que a lógica das regras esteja correta) e mensagens de texto diferentes, desde que transmitam a informação certa.
- Combine um tempo por atividade e avise quando faltarem 2–3 minutos para encerrar (evita duplas "polindo" demais uma parte e não terminando o resto).
