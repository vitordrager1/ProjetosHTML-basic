import Modal from './modal.js'

const modal = Modal();

const modalTitle = document.querySelector('.modal h2');
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

//pegar todos os botoes que existe com a class check
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button =>{//button armazena o objeto que o foreach traz dos 3 botoes existetes do checkbuttons ou seja tem3  botoes como é um for ele traz 1 botao de cada vez e armazena na button
    //adicionar o event listener
    //adiciona nos 3 botoes
    button.addEventListener("click", handleClick)
})


//quando o botao delete for clicado ele abre a modal
const deleteButton = document.querySelectorAll(".actions a.delete");

deleteButton.forEach(button => {
    button.addEventListener("click", (event) => handleClick(event, false))
})

function handleClick(event, check = true){
    event.preventDefault()
    const text = check ? "Marcar como lida" : "Excluir ";
    const slug = check ? "check" : "delete"

    const roomId = document.querySelector("#room-id").dataset.id;
    const questionId = event.target.dataset.id;

    const form = document.querySelector(".modal form");
    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)



    modalTitle.innerHTML= `${text} esta pergunta`
    modalDescription.innerHTML =`Tem certeza que deseja ${text.toLowerCase()} esta pergunta ?`
    modalButton.innerHTML= `Sim, ${text.toLowerCase()}`
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")

    //abrir modal
    modal.open()
}
