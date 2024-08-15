function adicionarPet(event) {
    event.preventDefault() // evita da tela recarregar :)

    const foto = document.getElementById('foto').value
    const nome = document.getElementById('nome').value 
    const idade = document.getElementById('idade').value 
    const cor = document.getElementById('cor').value
    const descricao = document.getElementById('descricao').value
    const tipo = document.getElementById('tipo').value

    /*===== Validação do formulário ===== */
    if(!foto){
        document.getElementById('foto').style.borderColor = 'red'
        document.getElementById('foto').style.borderWidth = '2px'
        document.getElementById('error-foto').innerText = 'Foto é obrigatório *'
    } else {
        document.getElementById('foto').style.borderColor = ''
        document.getElementById('foto').style.borderWidth = ''
        document.getElementById('error-foto').innerText = ''
    }


    if(nome === "") {
       // alert("Nome é obrigatório")
        document.getElementById('nome').style.borderColor = "red"
        document.getElementById('nome').style.borderWidth = "2px"
        document.getElementById('error-nome').innerText = "Nome é obrigatório *"
    } else {
        document.getElementById('nome').style.borderColor = ""
        document.getElementById('nome').style.borderWidth = ""
        document.getElementById('error-nome').innerText = ""
    }

    if(cor === "#802600") {
        document.getElementById('cor').style.borderColor = "red"
        document.getElementById('cor').style.borderWidth = "2px"
        document.getElementById('error-cor').innerText = "Cor é obrigatório *"
    } else {
        document.getElementById('cor').style.borderColor = ""
        document.getElementById('cor').style.borderWidth = ""
        document.getElementById('error-cor').innerText = ""
    }

    if(!descricao) {
        document.getElementById('descricao').style.borderColor = "red"
        document.getElementById('descricao').style.borderWidth = "2px"
        document.getElementById('error-descricao').innerText = "Descrição é obrigatório *"
    } else {
        document.getElementById('descricao').style.borderColor = ""
        document.getElementById('descricao').style.borderWidth = ""
        document.getElementById('error-descricao').innerText = ""
    }

    if(!tipo) {
        document.getElementById('tipo').style.borderColor = "red"
        document.getElementById('tipo').style.borderWidth = "2px"
        document.getElementById('error-tipo').innerText = "Tipo é obrigatório *"
    } else {
        document.getElementById('tipo').style.borderColor = ""
        document.getElementById('tipo').style.borderWidth = ""
        document.getElementById('error-tipo').innerText = ""
    }


    const pet = {
        id: crypto.randomUUID,
        foto: foto,
        nome: nome,
        idade: idade,
        cor: cor,
        descricao: descricao,
        tipo: tipo
    }

        const listaNoLocalStorage = JSON.parse(localStorage.getItem("pets")) || []; // vai no local storage e pega a lista
        console.log(listaNoLocalStorage);   

        listaNoLocalStorage.push(pet);
        
        localStorage.setItem("pets", JSON.stringify(listaNoLocalStorage)) // salvar no local storage

    /* 2 - colocar data */  
}



document // seu documento HTML
.getElementById('form-pet') // ir no documento e localizar o elemento com id form-pet
.addEventListener('submit', adicionarPet) // adicionar um evento de submissão vinculado a funcao adicionar pet