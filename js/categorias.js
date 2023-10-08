/*------------------------------Captura de botões (a- ancora)---------------------------*/

const botaoCachorro = document.getElementById("botao-cachorro");
const botaoGato = document.getElementById("botao-gato");
const botaoOutros = document.getElementById("botao-outros");

/*------------------------------Objetos das páginas de categorias------------------------*/

//Categoria cachorro

const categoriaCachorro = [ {
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
},
{
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
},
{
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
},
{
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
},
{
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
},
];

//Catagoria Gato


const categoriaGato = [ {
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
},
{
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
},
{
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
},
{
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
},
{
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
},
];

//Categoria outros

const categoriaOutros = [ {
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
},
{
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
},
{
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
},
{
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
},
{
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
},
];

/*------------------------------Capturando a section e renderizando------------------------- */

const secaoCard = document.getElementById("card-secao");

//Renderizando categoria cachorro

function renderizarCachorro() {

    secaoCard.innerHTML = "";

    for (let i = 0; i < categoriaCachorro.length; i++) {


        const novaDiv = document.createElement("div");

        novaDiv.classList.add("card");

        novaDiv.innerHTML = `
            <img ${categoriaCachorro[i].imagemAtributos} class="card-imagem">
            <h2 class="card-titulo">${categoriaCachorro[i].h2Titulo}</h2>
            <p class="card-informacoes">${categoriaCachorro[i].pInformações}</p>
            <p class="card-valor">${categoriaCachorro[i].pValor}</p>
        `;

        secaoCard.appendChild(novaDiv);
    }
}

botaoCachorro.addEventListener("click", renderizarCachorro);

//Renderizando categoria gato

function renderizarGato() {

    secaoCard.innerHTML = "";

    for (let i = 0; i < categoriaGato.length; i++) {


        const novaDiv = document.createElement("div");

        novaDiv.classList.add("card");

        novaDiv.innerHTML = `
            <img ${categoriaGato[i].imagemAtributos} class="card-imagem">
            <h2 class="card-titulo">${categoriaGato[i].h2Titulo}</h2>
            <p class="card-informacoes">${categoriaGato[i].pInformações}</p>
            <p class="card-valor">${categoriaGato[i].pValor}</p>
        `;

        secaoCard.appendChild(novaDiv);
    }
}

botaoGato.addEventListener("click", renderizarGato);


//Renderizando categoria outros

function renderizarOutros() {

    secaoCard.innerHTML = "";

    for (let i = 0; i < categoriaOutros.length; i++) {


        const novaDiv = document.createElement("div");

        novaDiv.classList.add("card");

        novaDiv.innerHTML = `
            <img ${categoriaOutros[i].imagemAtributos} class="card-imagem">
            <h2 class="card-titulo">${categoriaOutros[i].h2Titulo}</h2>
            <p class="card-informacoes">${categoriaOutros[i].pInformações}</p>
            <p class="card-valor">${categoriaOutros[i].pValor}</p>
        `;

        secaoCard.appendChild(novaDiv);
    }
    
}

botaoOutros.addEventListener("click", renderizarOutros);


/*-------------------Renderização automática----------------------*/


var urlCategoria = window.location.pathname;

if (urlCategoria == "/cachorro.html" || "/cachorro.html#") {
    renderizarCachorro();
}
else if (urlCategoria == "/gato.html" || "/gato.html#") {
    renderizarGato();
}
 else {
    renderizarOutros();
}
