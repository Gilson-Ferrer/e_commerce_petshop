let cards = document.querySelectorAll(".card");
let botaoAdicionar = document.querySelectorAll(".botao-adicionar");
let botaoRemover = document.querySelectorAll(".botao-remover");

cards.forEach(card => {
    card.addEventListener("mouseover", () => {
        console.log("Mouse passou por cima de um card");
    })
})
