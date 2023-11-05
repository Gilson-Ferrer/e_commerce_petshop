
// //ARRAY DE PROMOÇÃO//

let prodPromocao = [
   
{
    venda: false,
    imagemAtributos: "./object_imgs/produto-ninho-corda.svg",
    h2Titulo: 'Ninho de Corda Kakatoo',
    pInformacoes: 'Lar ideal para nidificação das aves',
    pValor: 'R$17,90',
    cod: '001',
    descricao: `O Ninho de Corda Kakatoo é feito de corda costurado com suporte metálico soldado. Indicado para Bicudos e outros passeriformes pequenos que criem em ninhos abertos.
    Ninho para deixar os pássaros mais aquecidos, excelente para o inverno que vai deixar seu pet mais quentinho. Ele é o lar ideal para nidificação das aves.`,
    categoriaAnimal: 'outros-animais',
    categoriaAba: 'promocao',
},

{
    imagemAtributos: "./object_imgs/produto-dipirona.svg" ,
    h2Titulo: 'Dipirona Gotas para Cães e Gatos',
    pInformacoes: 'Medicamento indicado para tratar casos de dor e febre',
    pValor: 'R$28,90',
    cod: '004',
    descricao: `Dipirona Biovet é um medicamento indicado para tratar casos de dor e febre, tanto agudas quanto crônicas, em cães e gatos. Seu uso é recomendado em diversas etiologias, sendo necessário consultar um médico-veterinário antes de iniciar sua utilização.

    Modo de uso de Dipirona Biovet
    
    Dipirona Gotas Biovet é um medicamento de uso oral. Pode ser administrado diretamente na boca do animal ou diluído em água, suco ou leite. Nesses casos, é fundamental garantir que o animal beba todo o líquido disponível, para não comprometer a dose adequada ao seu peso e idade, bem como os resultados esperados do tratamento.`,
    categoriaAba: ['promocao', 'mais-vendidos']  
},
{
    imagemAtributos: "./object_imgs/produto-racao.svg",
    h2Titulo: 'Ração Golden para Cães',
    pInformacoes: 'Ideal para cachorros com mais de 6 meses',
    pValor: 'R$129,90',
    cod: '005',
    descricao: `Formulada com nobres ingredientes, a Ração Golden Special para Cães Adultos Frango e Carne é o alimento ideal para manter o seu cão saudável. Além de ser livre de corantes e aromatizantes artificiais, proporciona uma dieta mais balanceada.

    Ajudando a eliminar o odor das fezes, a Ração Golden Special conta com uma fórmula que é rica em vitaminas e minerais. Isso faz com que a musculatura do animal sempre esteja fortalecida, o que consequentemente torna o cão mais ativo e menos propenso a doenças.`,
    categoriaAba: ['promocao','mais-vendidos','lancamentos']
},

{
    imagemAtributos: "./object_imgs/produto-serragem.svg",
    h2Titulo: 'Serragem para Hamster',
    pInformacoes: 'Desenvolvida para Hamsters de todos tipos',
    pValor: 'R$7,90',
    cod: '008',
    descricao: `A Serragem para Hamster Prensada é uma opção ideal de escolha para criar um ambiente seguro e acolhedor para seu hamster. Feita de pinus, uma madeira renovável, essa serragem prensada garante um espaço limpo e saudável, eliminando poeira e detritos soltos.

    Com uma textura suave é adequada para as patas sensíveis dos hamsters e auxilia na absorção da umidade e odor, mantendo o ambiente fresco.
    
    Desenvolvida especialmente para hamsters, a Serragem Prensada atende às necessidades naturais de escavação e exploração dos hamsters.`,
    categoriaAba: 'promocao',
},  
{
    imagemAtributos: "./object_imgs/produto-osso-brinquedo.svg" ,
    h2Titulo: 'Brinquedo Osso Flexi Bone',
    pInformacoes: 'Ideal para cães de todas idades',
    pValor: 'R$21,26',
    cod: '009',
    descricao: `O Brinquedo Osso Flexi Bone Laranja Odontopet é produzido em resina termoplástica totalmente atóxica, com aroma menta irresistível aos cães. A pressão exercida pela mandíbula de um cachorro é considerável, por isso recomenda-se mordedores não comestíveis para encorajar a mastigação.

    Satisfaz o desejo de mastigar por mais tempo. Diminui o tédio ajudando na limpeza dos dentes. Com material de primeira qualidade, 100% original e com tecnologia antibacteriana natural e específica contra germes, bactérias e outros microrganismos.`,
    categoriaAba: 'promocao'
},
{
    imagemAtributos: "./object_imgs/produto-bebedouro.svg",
    h2Titulo: 'Bebedouro para Pássaros',
    pInformacoes: 'Ideal para manter o seu pet hidratado a qualquer hora do dia',
    pValor: 'R$5,50',
    cod: '010',
    descricao: `O Bebedouro para Pássaros Tudo Pet Amarelo é ideal para manter o seu pet hidratado a qualquer hora do dia, mantendo a água fresca a todo momento.

    De prático manuseio, o bebedouro Tudo Pet possui um suporte na parte superior para encaixar na grade do viveiro ou gaiola, assim você consegue encaixar de forma que fique fácil para sua ave se hidratar.`,
    categoriaAnimal: 'outros-animais',
    categoriaAba: ['lancamentos','mais-vendidos']
},  
{
    imagemAtributos: "./object_imgs/produto-caminha.svg" ,
    h2Titulo: 'Cama Retangular Carmel',
    pInformacoes: 'Confortável e estilosa',
    pValor: 'R$89,90',
    cod: '011',
    descricao: `A Cama Retangular Carmel Fábrica Pet Rosa é perfeita para o seu pet! Conforto e estilo, tudo que cães e gatos precisam na hora de descansar.

    Essa cama retangular foi elaborada pensando em trazer sempre o máximo de conforto. Feita com um tecido macio e com enchimento em fibra siliconada que não retém a umidade.`,
    categoriaAba: ['mais-vendidos','promocao']
},

{
    imagemAtributos: "./object_imgs/produto-aditivo.svg" ,
    h2Titulo: 'Aditivo Probiótico Pet',
    pInformacoes: 'Suplementação com micro-organismos vivos',
    pValor: 'R$33,31',
    cod: '013',
    descricao: `O Aditivo Probiótico Pet é um medicamento indicado para cães e gatos de todas as idades e que estejam precisando fazer o uso de uma suplementação com micro-organismos vivos para o equilíbrio da microbiota intestinal.

    Para que serve o probiótico pet?
    
    A fórmula deste medicamento é composta por Lactobacillus acidophilus e Enterococcus faecium e tem como objetivo recompor e equilibrar a flora intestinal do seu pet. Dessa forma, o produto age com muita eficácia e rapidez, evitando diarréias alimentares e outros tipos de desconforto intestinal.`,
    categoriaAba: 'promocao',
},
{
    imagemAtributos: "./object_imgs/produto-adestrador-click.svg",
    h2Titulo: 'Adestrador Click-R Pet ',
    pInformacoes: 'Utilizado para adestrar cães com reforços positivos',
    pValor: 'R$58,41',
    cod: '014',
    descricao: `O Adestrador Click-R Pet Safe é um dispositivo utilizado para adestrar cães com reforços positivos associados a recompensas de carinhos e petiscos.

    É o produto ideal para quem quer se aventurar pelo mundo do adestramento ou mesmo para adestradores experientes. Possui uma alça de dedo que dá mais conforto e facilidade para segurar o clicker.
    
    Ao apertar o botão do Click-R ele produz um som fazendo com que seu animal de estimação esteja pronto para entender o comando, o ideal é sempre estar com petiscos ou um agrado para dizer ao pet que ele está fazendo um bom trabalho.`,
    categoriaAnimal: 'cachorro',
    categoriaAba: 'promocao',
},

{
    imagemAtributos: "./object_imgs/produto-ratinho.svg",
    h2Titulo: 'Brinquedo Ratinho Fofo',
    pInformacoes: 'Ideal para gatos com mais de 6 meses',
    pValor: 'R$17,21',
    cod: '016',
    descricao: `Um brinquedo divertido que proporciona brincadeiras diversas. Ratinho com penas, melhor distrativo para gato. Previne o sedentarismo e a ansiedade, estimulando a atividade física.

    Brincar proporciona exercícios divertidos e entretenimento, mantém seu animal de estimação ativo mentalmente e fisicamente.`,
    categoriaAba: 'promocao',
},
{
    imagemAtributos: "./object_imgs/produto-areia.svg",
    h2Titulo: 'Areia Pipicat Classic ',
    pInformacoes: 'Ideal para gatos',
    pValor: 'R$17,71',
    cod: '017',
    descricao: `A Areia Pipicat Classic é uma das sugestões de banheiros para felinos mais procuradas do mercado. Além de ser uma opção fácil de usar, descartar e de combate ao mau odor, ela conta com um preço acessível, o que garante um ótimo custo-benefício para os tutores.

    Por que ter areia sanitária para gatos em casa?
    
    O principal motivo para ter em casa a areia sanitária Pipicat Classic é proporcionar um local limpo e atrativo para que o seu pet possa fazer as necessidades básicas. Isso sem falar que basta uma pá e um saco para higienizar o banheiro do gato e livrar a casa de odores indesejados.`,
    categoriaAba: ['promocao','mais-vendidos'],
},
{
    imagemAtributos: "./object_imgs/produto-varinha.svg",
    h2Titulo: 'Varinha para Gatos Bolinha',
    pInformacoes: 'Ideal para gatos com mais de 6 meses',
    pValor: 'R$21,90',
    cod: '018',
    descricao: `Seu gato vai adorar se divertir com esse brinquedo interativo, que é uma ótima forma de manter seu pet ativo mentalmente e fisicamente.
    Além de conter um pequeno sino dentro da bolinha, que vai estimular seu gatinho á brincadeira.
    Os gatos são animais independentes e necessitam que seus instintos naturais sejam estimulados para se sentirem ainda mais felizes.
    A Varinha é uma ótima opção para aproximar você e seu pet cada dia mais!
    
    Produto destinado exclusivamente ao uso animal.`,
    categoriaAba: 'promocao',
},

{
    imagemAtributos: "./object_imgs/produto-meia.svg" ,
    h2Titulo: 'Meia Sapato HomePet Rosa',
    pInformacoes: 'Vai esquentar as patinhas do seu pet',
    pValor: 'R$21,90',
    cod: '020',
    descricao: `A Meia Sapato HomePet Rosa é um produto feito para deixar seu pet com estilo e com as patinhas bem protegidas. Acessório que vai esquentar as patinhas do seu pet.
    Produzida em 80% algodão 20% poliéster e possui parte antiderrapante para evitar possíveis acidentes. Embalagem contém 4 unidades do mesmo tamanho.
    As meias além de esquentar as patinhas do seu pet, protegem seu piso, o banco e vidros do carro, de possíveis arranhões, além de evitar possíveis barulhos em piso no caso de apartamentos.`,
    categoriaAba: ['promocao','mais-vendidos'],
},

{
    imagemAtributos: "./object_imgs/produto-roda-exercicio.svg",
    h2Titulo: 'Roda de Exercício Roedores',
    pInformacoes: 'Ideal para roedores',
    pValor: 'R$31,41',
    cod: '022',
    descricao: `A Roda de Exercício para Roedores Savana Azul é a forma segura e divertida de exercitar, distrair e diminuir o estresse dos pequenos roedores.
    Brinquedo com design simples, é feito com acrílico de qualidade que garante segurança e conforto para o seu pet durante o uso.
    Eficaz e extremamente silenciosa, a roda de exercício pode ser montada de duas formas: fixada na gaiola ou com o suporte de chão.
    `,
    categoriaAba: 'promocao',
},
{
    imagemAtributos: "./object_imgs/produto-transporte.svg",
    h2Titulo: 'Caixa de Transporte',
    pInformacoes: 'Alta qualidade, com furos nas laterais',
    pValor: 'R$287,81',
    cod: '023',
    descricao: `Produzida com material de alta qualidade, com furos nas laterais, proporcionando todo conforto necessário durante o transporte.

    É imprescindível saber as medidas do seu pet na hora de comprar a caixa de transporte.
    A Caixa de transporte C-Pet possui muitos diferenciais. Disponível do tamanho extra pequeno até gigante, que suporta animais de até 61 kg, é desenvolvida com material resistente e durável.`,
    categoriaAba: ['promocao','mais-vendidos'],
},
{
    imagemAtributos: "./object_imgs/produto-globo.svg",
    h2Titulo: 'Globo Acrílico para Hamster',
    pInformacoes: 'Extremamente silencioso',
    pValor: 'R$24,21',
    cod: '024',
    descricao: `O Globo Acrílico para Hamster com Suporte 4 em 1 Savana Azul é a forma mais divertida para entreter Hamsters e pequenos roedores.
    Feito com materiais resistentes e design simples, é eficaz e extremamente silencioso, o Globo Acrílico com Suporte possui diâmetro total de 11,5cm que dá segurança e conforto na hora de brincar.`,
    categoriaAba: 'promocao',
},

{
    imagemAtributos: "./object_imgs/produto-cascalho.svg" ,
    h2Titulo: 'Cascalho para Aquário',
    pInformacoes: 'Não altera o PH da água',
    pValor: 'R$21,90',
    cod: '026',
    descricao: `O Cascalho para Aquário Aqua Pedras é feito à base de cascalho de cristal quartzo natural, colorido à base de resina e corantes atóxicos, ideal para aquários, pois além de trazer um layout bonito não altera o ph da água.
    Todo aquário precisa de uma base para que a vida dos peixes e plantas tenha qualidade. Comece escolhendo o Substrato para Aquários Aqua Pedras Cascalho de Quartzo Natural.`,
    categoriaAnimal: 'outros-animais',
    categoriaAba: ['promocao','mais-vendidos'],
},
{
    imagemAtributos: "./object_imgs/produto-racao-peixe.svg" ,
    h2Titulo: 'Ração Color Flakes Tetra',
    pInformacoes: 'Ideal para peixes',
    pValor: 'R$22,41',
    cod: '027',
    descricao: `A Ração Color Flakes Tetra foi desenvolvida como alimento diário para todos os peixes tropicais, possui uma mistura com ingredientes de alta qualidade de modo que os peixes adoram.
    Sua composição auxilia o desenvolvimento dos peixes e mantém a sua água limpa por mais tempo, já que ela não libera dejetos no aquário. Contém uma mistura elaborada com ingredientes exclusivos, vitaminas e minerais incluindo farinha de peixe, para a palatabilidade.`,
    categoriaAba: 'promocao',
},

{
    imagemAtributos: "./object_imgs/produto-bifinho.svg",
    h2Titulo: 'Petisco Mini Bifinho Keldog',
    pInformacoes: 'Para seu pet, defumado e suculento',
    pValor: 'R$23,22',
    cod: '029',
    descricao: `O Petisco Mini Bifinho Keldog Carne é macio e saboroso! Perfeito para todos os momentos é o petisco ideal para um lanche nos passeios, demonstração de afeto e prêmio de adestramento.
    Esse Petisco para Cachorro tem um delicioso sabor defumado e suculento, feito com carnes selecionadas é indicado para cães de todos os portes. Seu pet vai amar!
    `,
    categoriaAba: ['promocao','lancamentos','mais-vendidos'],

}]



// CAPTURAR SEÇÃO DOS CARDS PAGINA PROMOÇÃO //

const secaoCardsPromocao = document.getElementById('cards-promocao');

renderPromocao()   


// FUNÇÃO PARA RENDERIZAR AS PROMOÇÕES //

function renderPromocao(){

for (let i = 0; i < prodPromocao.length; i ++){
    const newCard = document.createElement("div");
    newCard.classList.add("card");

    newCard.innerHTML = `
    <div>
    <img src=${prodPromocao[i].imagemAtributos} alt="${prodPromocao[i].h2Titulo}" class="card-imagem">
    <h2 class="card-titulo">${prodPromocao[i].h2Titulo}</h2>
    <p class="card-informacoes">${prodPromocao[i].cod}</p>
    <p class="card-valor">${prodPromocao[i].pValor}</p>
    </div>
    `;

    secaoCardsPromocao.appendChild(newCard);

    
}

}



const btnAdicionar = document.getElementsByClassName('card');

for (let i = 0; i < btnAdicionar.length; i ++){
    btnAdicionar[i].addEventListener('click', function (e){
        const button = e.target
        const infoProduto = button.parentElement
        const codProduto = infoProduto.getElementsByClassName('card-informacoes')[0].innerHTML;

        localStorage.setItem('Valuecod', JSON.stringify(parseInt(codProduto)))
        window.location.href = "./carrinho.html"

    })
}

