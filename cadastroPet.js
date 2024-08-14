function adicionarPet(event) {
    event.preventDefault() // evita da tela recarregar :)

    const foto = document.getElementById("foto").value
    const nome = document.getElementById("nome").value
    const idade = document.getElementById("idade").value
    const cor = document.getElementById("cor").value
    const descricao = document.getElementById("descricao").value

}



document // Seu documento HTML
.getElementById("form-pet") // ir no documento e localizar o elemento com o id form-get
.addEventListener("submit", adicionarPet) // adicionar um evento de submissão vinculado a função adicionarPet