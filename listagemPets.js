function carregarDados(){
    const petsNaMemoria = JSON.parse(localStorage.getItem('pets'))

    const lista = document.getElementById('lista-pets')

    /*
        const meuH1 = document.createElement('h1');
        meuH1.innerText = 'Testando os poderes do JavaScript';
        lista.appendChild(meuH1);
    */

    /* == Geração da DIV == */

    const div = document.createElement('div')
    div.classList.add('item-pet')

    const img = document.createElement('img')
    img.setAttribute('width', '225px')
    img.setAttribute('src', 'https://m.media-amazon.com/images/I/71dULMAV6aL.jpg')

    div.appendChild(img)

    const h2 = document.createElement('h2')
    h2.innerText = 'Gato Ronaldo'

    div.appendChild(h2)

    const button = document.createElement('a')
    button.innerText = 'Adicionar'

    div.appendChild(button)

    /* == FIM da Geração da DIV == */

    console.log(div)

    lista.appendChild(div)

}

document.addEventListener('DOMContentLoaded', carregarDados ) // quando for renderiza , vai disparar a funcao