function cadastrar(e){
    e.preventDefault();
    
    const nome = document.getElementById("nome").value;
    const cargo = document.getElementById("cargo").value;
    const email = document.getElementById("email").value;


    alert(`Cadastro Realizado
        
        Nome: ${nome}
        Cargo: ${cargo}
        Email: ${email}
        `);

    // Reset manual, capturando cada input e substituindo seu valor por nada
    // document.getElementById("nome").value = ""

    // Utilizando o evento que ativou a função. Capturando a origem do evento e rodando reset()
    // e.target.reset()

    // Captura o formulário e roda sua função de reset
    document.getElementById("form-cadastro").reset()


    // Mostrar o funcionário no HTML

    const listaFunc = document.getElementById("lista-funcionarios")

    const novoFuncionario = document.createElement("li")
    novoFuncionario.innerHTML = `Nome - ${nome} | Cargo - ${cargo} | Email - ${email}`

    listaFunc.appendChild(novoFuncionario)
}