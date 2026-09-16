const listaTarefas = []

function cadastrarTarefa(e){
    e.preventDefault()

    const titulo = document.getElementById("titulo").value

    const novaTarefa = {
        "titulo": titulo,
        "estado": "pendente"
    }

    listaTarefas.push(novaTarefa)

    console.log(listaTarefas)
    

    document.getElementById("form-cadastro").reset()
}