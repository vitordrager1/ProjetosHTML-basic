import Modal from './modal.js'

const modal = Modal();

//pegar todos os botoes que existe com a class check
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button =>{//button armazena o objeto que o foreach traz dos 3 botoes existetes do checkbuttons ou seja tem3  botoes como é um for ele traz 1 botao de cada vez e armazena na button
    //adicionar o event listener
    //adiciona nos 3 botoes
    button.addEventListener("click", event => {
        modal.open()
    })
})
//pegar qnd o marcar como lido for clicado

