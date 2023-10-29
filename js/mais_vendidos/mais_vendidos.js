
// CAPTURAR SEÇÃO DOS CARDS PAGINA PROMOÇÃO //


const prodMaisVendidos = [
{
    imagemAtributos:"./object_imgs/produto-racaoumida-gato.svg",
    h2Titulo: 'Ração umida para Gatos',
    pInformacoes: 'Ideal para gatos com mais de 6 meses',
    pValor: 'R$3,99',
    cod: '001',
    descricao: `Um alimento completo, a Ração Úmida Golden Gourmet Gatos Castrados Carne é enriquecida com vitaminas e minerais que atentem as necessidades dos gatos castrados a partir dos 6 meses de idade, por contar com L-Carnitina possibilita um equilíbrio ideal de nutrientes.

    Contando com um molho suculento, o Sachê Golden Gatos Castrados auxilia na manutenção do sistema urinário saudável, pois contribui para ingestão diária de água. Conta em sua composição com ingredientes 100% naturais possuindo um sabor saudável pois não contém corantes e aromatizantes artificiais.`,
    categoriaAba: 'mais-vendidos'
},

{
    imagemAtributos:"./object_imgs/produto-racaoumida-cao.svg",
    h2Titulo: 'Ração umida para Cães',
    pInformacoes: 'Ideal para cães pequeno ou médio porte',
    pValor: 'R$3,99',
    cod: '003',
    descricao: `A Ração Úmida Pedigree Adulto Raças Pequenas Carne é composta por proteínas de altíssima qualidade. A carne, cozida no vapor, além de saudável é muito saborosa. Graças à sua composição repleta de fibras, a ração úmida ajuda seu animal a ter fezes mais firmes, o que facilita a limpeza.

    Não bastasse isso, a Ração Úmida Pedigree Adulto Raças Pequenas Carne é livre de corantes, aromatizantes e conservantes artificiais, o que ajuda na saúde do seu cão. Ela é produzida pela Pedigree, referência há décadas em alimentos de qualidade e procedência garantidas.`,
    categoriaAba: 'mais-vendidos'
},
{
    imagemAtributos: "./object_imgs/produto-dipirona.svg" ,
    h2Titulo: 'Dipirona Gotas para Cães e Gatos',
    pInformacoes: 'Medicamento indicado para tratar casos de dor e febre',
    pValor: 'R$28,90',
    cod: '005',
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
    cod: '006',
    descricao: `Formulada com nobres ingredientes, a Ração Golden Special para Cães Adultos Frango e Carne é o alimento ideal para manter o seu cão saudável. Além de ser livre de corantes e aromatizantes artificiais, proporciona uma dieta mais balanceada.

    Ajudando a eliminar o odor das fezes, a Ração Golden Special conta com uma fórmula que é rica em vitaminas e minerais. Isso faz com que a musculatura do animal sempre esteja fortalecida, o que consequentemente torna o cão mais ativo e menos propenso a doenças.`,
    categoriaAba: ['promocao','mais-vendidos','lancamentos']
},

{
    imagemAtributos: "./object_imgs/produto-bebedouro.svg",
    h2Titulo: 'Bebedouro para Pássaros',
    pInformacoes: 'Ideal para manter o seu pet hidratado a qualquer hora do dia',
    pValor: 'R$5,50',
    cod: '011',
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
    cod: '012',
    descricao: `A Cama Retangular Carmel Fábrica Pet Rosa é perfeita para o seu pet! Conforto e estilo, tudo que cães e gatos precisam na hora de descansar.

    Essa cama retangular foi elaborada pensando em trazer sempre o máximo de conforto. Feita com um tecido macio e com enchimento em fibra siliconada que não retém a umidade.`,
    categoriaAba: ['mais-vendidos','promocao']
},
{
    imagemAtributos: "./object_imgs/produto-comedouro.svg",
    h2Titulo: 'Comedouro Lateral aves',
    pInformacoes: 'Comedouro para alimentar seu pet com mais estilo',
    pValor: 'R$12,30',
    cod: '013',
    descricao: `Comedouro para alimentar seu pet com mais estilo.
    Recipiente pra colocar o alimento do seu pássaro em um local amplo e limpo, produzido com 2 aberturas e poleiro para facilitar a alimentação do seu pássaro.
    Feito com excelente material pra não acumular sujeira e fácil de limpar.
    Muito prático e de fácil manuseio, com encaixe que prende perfeitamente na gaiola.

    Cabe a quantidade de ração adequada para a alimentação diária.`,
    categoriaAnimal: ['cachorro','gato','outros-animais'],
    categoriaAba: 'mais-vendidos'
},

{
    imagemAtributos:"./object_imgs/produto-coelheira.svg",
    h2Titulo: 'Coelheira Bandeja e Toca',
    pInformacoes: 'Ideal para segurança de seus coelhos',
    pValor: 'R$407,30',
    cod: '016',
    descricao: `Os coelhos têm o hábito de roer e, por isso, deixá-los soltos em casa sem a supervisão dos tutores pode ser perigoso, principalmente se houver fiação ou equipamentos eletrônicos no chão da residência.

    Por isso, a Coelheira Bandeja e Toca Monaco é um item indispensável para o pet ficar em segurança quando ele estiver sozinho em casa.
    
    Coelheira com toca externa, bandeja e esteira removíveis.`,
    categoriaAnimal: 'outros-animais',
    categoriaAba: 'mais-vendidos'
},

{
    imagemAtributos: "./object_imgs/produto-areia.svg",
    h2Titulo: 'Areia Pipicat Classic ',
    pInformacoes: 'Ideal para gatos',
    pValor: 'R$17,71',
    cod: '018',
    descricao: `A Areia Pipicat Classic é uma das sugestões de banheiros para felinos mais procuradas do mercado. Além de ser uma opção fácil de usar, descartar e de combate ao mau odor, ela conta com um preço acessível, o que garante um ótimo custo-benefício para os tutores.

    Por que ter areia sanitária para gatos em casa?
    
    O principal motivo para ter em casa a areia sanitária Pipicat Classic é proporcionar um local limpo e atrativo para que o seu pet possa fazer as necessidades básicas. Isso sem falar que basta uma pá e um saco para higienizar o banheiro do gato e livrar a casa de odores indesejados.`,
    categoriaAba: ['promocao','mais-vendidos'],
},

{
    imagemAtributos:"./object_imgs/produto-capa-chuva.svg",
    h2Titulo: 'Capa de Chuva para Cachorro',
    pInformacoes: 'Ideal para cachorros',
    pValor: 'R43,90',
    cod: '020',
    descricao: `A Capa de Chuva para Cachorro Rosa Bichinho Chic conta com um capuz, que além de proteger ainda deixará seu pet estiloso, ideal para os passeios em dias chuvosos.

    A Capa para Cães com Capuz foi produzida em plástico PVC transparente com uma borda em acabamento colorido dando um lindo contraste além de possuir também passagem para a guia e fitas de ajuste na cintura e pescoço.`,
    categoriaAnimal: 'cachorro',
    categoriaAba: 'mais-vendidos'
},
{
    imagemAtributos: "./object_imgs/produto-meia.svg" ,
    h2Titulo: 'Meia Sapato HomePet Rosa',
    pInformacoes: 'Vai esquentar as patinhas do seu pet',
    pValor: 'R$21,90',
    cod: '021',
    descricao: `A Meia Sapato HomePet Rosa é um produto feito para deixar seu pet com estilo e com as patinhas bem protegidas. Acessório que vai esquentar as patinhas do seu pet.
    Produzida em 80% algodão 20% poliéster e possui parte antiderrapante para evitar possíveis acidentes. Embalagem contém 4 unidades do mesmo tamanho.
    As meias além de esquentar as patinhas do seu pet, protegem seu piso, o banco e vidros do carro, de possíveis arranhões, além de evitar possíveis barulhos em piso no caso de apartamentos.`,
    categoriaAba: ['promocao','mais-vendidos'],
},
{
    imagemAtributos: "./object_imgs/produto-vestido.svg",
    h2Titulo: 'Vestido Elegance Bichinho',
    pInformacoes: 'Confeccionado em tecido de algodão',
    pValor: 'R$27,81',
    cod: '022',
    descricao: `O Vestido Elegance Bichinho Chic Rosa é um item indispensável no guarda-roupas do seu pet. Estiloso e confortável, garante que o seu pet fique muito mais charmoso. Confeccionado em tecido de algodão e botões personalizados Bichinho Chic.

    Hoje em dia a quantidade de roupinhas para os pets é enorme, deixando-os mais estilosos e confortáveis a todo momento. E na Cobasi você encontra o Vestido Elegance Bichinho Chic Rosa com um preço especial.`,
    categoriaAnimal: ['cachorro','gato','outros-animais'],
    categoriaAba: 'mais-vendidos'
},

{
    imagemAtributos: "./object_imgs/produto-transporte.svg",
    h2Titulo: 'Caixa de Transporte',
    pInformacoes: 'Alta qualidade, com furos nas laterais',
    pValor: 'R$287,81',
    cod: '024',
    descricao: `Produzida com material de alta qualidade, com furos nas laterais, proporcionando todo conforto necessário durante o transporte.

    É imprescindível saber as medidas do seu pet na hora de comprar a caixa de transporte.
    A Caixa de transporte C-Pet possui muitos diferenciais. Disponível do tamanho extra pequeno até gigante, que suporta animais de até 61 kg, é desenvolvida com material resistente e durável.`,
    categoriaAba: ['promocao','mais-vendidos'],
},

{
    imagemAtributos: "./object_imgs/produto-bomba.svg",
    h2Titulo: 'Bomba Submersa para Fonte',
    pInformacoes: 'Circula até 35 litros de água',
    pValor: 'R$55,71',
    cod: '026',
    descricao: `A Bomba Submersa para Fonte H190 foi desenvolvida com a mais alta tecnologia, indicada para fontes e circulação de água em aquários de até 35 litros.
    Silenciosa e segura, a Bomba Submersa H190 VigoAr é essencial para obter um ambiente oxigenado para os peixes. Para as fontes, ela pode chegar a uma altura de 45 centímetros.`,
    categoriaAnimal: 'outros-animais',
    categoriaAba: 'mais-vendidos'
},
{
    imagemAtributos: "./object_imgs/produto-cascalho.svg" ,
    h2Titulo: 'Cascalho para Aquário',
    pInformacoes: 'Não altera o PH da água',
    pValor: 'R$21,90',
    cod: '027',
    descricao: `O Cascalho para Aquário Aqua Pedras é feito à base de cascalho de cristal quartzo natural, colorido à base de resina e corantes atóxicos, ideal para aquários, pois além de trazer um layout bonito não altera o ph da água.
    Todo aquário precisa de uma base para que a vida dos peixes e plantas tenha qualidade. Comece escolhendo o Substrato para Aquários Aqua Pedras Cascalho de Quartzo Natural.`,
    categoriaAnimal: 'outros-animais',
    categoriaAba: ['promocao','mais-vendidos'],
},

{
    imagemAtributos: "./object_imgs/produto-pote.svg",
    h2Titulo: 'Comedouro Colors Flicks Azul',
    pInformacoes: 'Indicado para cães e gatos',
    pValor: 'R$15,90',
    cod: '029',
    descricao: `O Comedouro Colors Flicks Azul é indicado para cães e gatos de todos tamanhos e portes. Feito em aço inox resistente, tem ótima durabilidade e sua base possui borda de borracha natural, que o torna antideslizante.
    O comedouro para cachorro e gato pode ser usado para ração seca, ração úmida ou água que ficarão frescos por mais tempo deixando a hora da alimentação do seu pet mais agradável.`,
    categoriaAnimal: ['cachorro','gato'],
    categoriaAba: 'mais-vendidos',
},
{
    imagemAtributos: "./object_imgs/produto-bifinho.svg",
    h2Titulo: 'Petisco Mini Bifinho Keldog',
    pInformacoes: 'Para seu pet, defumado e suculento',
    pValor: 'R$23,22',
    cod: '030',
    descricao: `O Petisco Mini Bifinho Keldog Carne é macio e saboroso! Perfeito para todos os momentos é o petisco ideal para um lanche nos passeios, demonstração de afeto e prêmio de adestramento.
    Esse Petisco para Cachorro tem um delicioso sabor defumado e suculento, feito com carnes selecionadas é indicado para cães de todos os portes. Seu pet vai amar!
    `,
    categoriaAba: ['promocao','lancamentos','mais-vendidos'],

}];



const secaoCardsMaisVendidos = document.getElementById('cards-mais-vendidos');


renderMaisVendidos()


function renderMaisVendidos(){

    for (let i = 0; i < prodMaisVendidos.length; i ++){
        const newCard2 = document.createElement("div");
        newCard2.classList.add("card");
    
        newCard2.innerHTML = `
        <div>
        <img src=${prodMaisVendidos[i].imagemAtributos} alt="${prodMaisVendidos[i].h2Titulo}" class="card-imagem">
        <h2 class="card-titulo">${prodMaisVendidos[i].h2Titulo}</h2>
        <p class="card-informacoes">Cod: ${prodMaisVendidos[i].cod}</p>
        <p class="card-valor">${prodMaisVendidos[i].pValor}</p>
        </div>
        `;
    
        secaoCardsMaisVendidos.appendChild(newCard2);

    }

}