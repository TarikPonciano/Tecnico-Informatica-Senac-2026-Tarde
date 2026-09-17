const listaTarefas = []

function cadastrarTarefa(e){
    e.preventDefault()

    // 1. Coletar Dados
    const titulo = document.getElementById("titulo").value

    // 2. Estruturar os dados (compilar/montar)
    const novaTarefa = {
        "titulo": titulo,
        "estado": "pendente"
    }

    // 3. Armazenar os dados 
    listaTarefas.push(novaTarefa)

    alert("Tarefa Cadastrada com Sucesso!")

    renderizar()
    
    document.getElementById("form-cadastro").reset()
    
}

// Construir uma função chamada renderizarTarefas
// 1. Ler a lista de tarefas
// 2. Criar um novo li para cada tarefa
// 3. Adicionar os li criados em um elemento(ul) chamado lista de tarefas

function renderizar(){
    // Lembrar de zerar o elemento que segura os cards
    document.getElementById("lista-tarefas").innerHTML = ""
    
    listaTarefas.forEach((tarefa) => {
        const cardTarefa = document.createElement("li")
        
        cardTarefa.innerHTML = `${tarefa["titulo"]} - ${tarefa["estado"]}`

        document.getElementById("lista-tarefas").appendChild(cardTarefa)
    })
}