//                                 Arrays de objetos dos cards do carrossel

const carrosselPromoção = [ {
    imagemAtributos: 'src="./img/produto_fr.png" alt="Osso de brinquedo"',
    h2Titulo: 'Osso de brinquedo',
    pInformações: 'Informações',
    pValor: 'R$19,99',
},
{
    imagemAtributos: 'src="./img/produto2_fr.png" alt="Potes para ração"',
    h2Titulo: 'Potes para Ração',
    pInformações: 'Informações',
    pValor: 'R$19,99',
}
];

const carrosselMaisVendidos = [ {
    imagemAtributos: 'src="./img/produto_fr.png" alt="Osso de brinquedo"',
    h2Titulo: 'Osso de brinquedo',
    pInformações: 'Informações',
    pValor: 'R$19,99',
},
{
    imagemAtributos: 'src="./img/produto2_fr.png" alt="Potes para ração"',
    h2Titulo: 'Potes para Ração',
    pInformações: 'Informações',
    pValor: 'R$19,99',
}
];

const carrosselLançamentos = [ {
    imagemAtributos: 'src="./img/produto_fr.png" alt="Osso de brinquedo"',
    h2Titulo: 'Osso de brinquedo',
    pInformações: 'Informações',
    pValor: 'R$19,99',
},
{
    imagemAtributos: 'src="./img/produto2_fr.png" alt="Potes para ração"',
    h2Titulo: 'Potes para Ração',
    pInformações: 'Informações',
    pValor: 'R$19,99',
}
];

//                                 Captura de botões do carrossel

const botaoPromocao = document.getElementById("botao-promocao");
const botaoMaisVendidos = document.getElementById("botao-mais_vendidos");
const botaoLancamentos = document.getElementById("botao-lancamentos");

//                                          Redenrização dos cards

const carrosselContainer = document.getElementById("container-carrossel");


// Carrossel Promoção

function renderizarPromocao() {

    carrosselContainer.innerHTML = "";

    for (let i = 0; i < carrosselPromoção.length; i++) {

        const novaDiv = document.createElement("div");

        novaDiv.classList.add("card");

        novaDiv.innerHTML = `
            <img ${carrosselPromoção[i].imagemAtributos} class="card-imagem">
            <h2 class="card-titulo">${carrosselPromoção[i].h2Titulo}</h2>
            <p class="card-informacoes">${carrosselPromoção[i].pInformações}</p>
            <p class="card-valor">${carrosselPromoção[i].pValor}</p>
        `;

        carrosselContainer.appendChild(novaDiv);
    }
}

botaoPromocao.addEventListener("click", renderizarPromocao);

// Carrossel Mais Vendidos

function renderizarMaisVendidos() {

    carrosselContainer.innerHTML = "";

    for (let i = 0; i < carrosselMaisVendidos.length; i++) {

        const novaDiv = document.createElement("div");

        novaDiv.classList.add("card");

        novaDiv.innerHTML = `
            <img ${carrosselMaisVendidos[i].imagemAtributos} class="card-imagem">
            <h2 class="card-titulo">${carrosselMaisVendidos[i].h2Titulo}</h2>
            <p class="card-informacoes">${carrosselMaisVendidos[i].pInformações}</p>
            <p class="card-valor">${carrosselMaisVendidos[i].pValor}</p>
        `;

        carrosselContainer.appendChild(novaDiv);
    }
}

botaoMaisVendidos.addEventListener("click", renderizarMaisVendidos);

// Carrossel Lançamentos

function renderizarLançamentos() {

    carrosselContainer.innerHTML = "";

    for (let i = 0; i < carrosselLançamentos.length; i++) {

        const novaDiv = document.createElement("div");

        novaDiv.classList.add("card");

        novaDiv.innerHTML = `
            <img ${carrosselLançamentos[i].imagemAtributos} class="card-imagem">
            <h2 class="card-titulo">${carrosselLançamentos[i].h2Titulo}</h2>
            <p class="card-informacoes">${carrosselLançamentos[i].pInformações}</p>
            <p class="card-valor">${carrosselLançamentos[i].pValor}</p>
        `;

        carrosselContainer.appendChild(novaDiv);
    }
}

botaoLancamentos.addEventListener("click", renderizarLançamentos);