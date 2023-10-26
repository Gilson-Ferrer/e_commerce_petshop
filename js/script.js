/*---------------------Objeto com todos produtos-------------------------*/

const todosProdutos = [
    {
        imagemAtributos: 'src="./img/produto-racaoumida-gato.svg" alt="Ração umida para Gatos"',
        h2Titulo: 'Ração umida para Gatos',
        pInformacoes: 'Ideal para gatos com mais de 6 meses',
        pValor: 'R$3,99',
        cod: '001',
        descricao: `Um alimento completo, a Ração Úmida Golden Gourmet Gatos Castrados Carne é enriquecida com vitaminas e minerais que atentem as necessidades dos gatos castrados a partir dos 6 meses de idade, por contar com L-Carnitina possibilita um equilíbrio ideal de nutrientes.

        Contando com um molho suculento, o Sachê Golden Gatos Castrados auxilia na manutenção do sistema urinário saudável, pois contribui para ingestão diária de água. Conta em sua composição com ingredientes 100% naturais possuindo um sabor saudável pois não contém corantes e aromatizantes artificiais.`,
        categoriaAnimal: 'gato',
        categoriaAba: 'mais-vendidos'
        },
    {
        imagemAtributos: 'src="./img/produto-ninho-corda.svg" alt="Ninho de Corda Kakatoo"',
        h2Titulo: 'Ninho de Corda Kakatoo',
        pInformacoes: 'Lar ideal para nidificação das aves',
        pValor: 'R$17,90',
        cod: '002',
        descricao: `O Ninho de Corda Kakatoo é feito de corda costurado com suporte metálico soldado. Indicado para Bicudos e outros passeriformes pequenos que criem em ninhos abertos.
        Ninho para deixar os pássaros mais aquecidos, excelente para o inverno que vai deixar seu pet mais quentinho. Ele é o lar ideal para nidificação das aves.
        
        Dimensões aproximadas
        P - D 95 mm x P 45 mm
        M- D 105mm x P 45 mm
        G - D 115mm x P 55 mm
        XG - D 125mm x P 60 mm`,
        categoriaAnimal: 'outros-animais',
        categoriaAba: 'promocao'
        },
    {
        imagemAtributos: 'src="./img/produto-racaoumida-cao.svg" alt="Ração umida para Cães"',
        h2Titulo: 'Ração umida para Cães',
        pInformacoes: 'Ideal para cães pequeno ou médio porte',
        pValor: 'R$3,99',
        cod: '003',
        descricao: `A Ração Úmida Pedigree Adulto Raças Pequenas Carne é composta por proteínas de altíssima qualidade. A carne, cozida no vapor, além de saudável é muito saborosa. Graças à sua composição repleta de fibras, a ração úmida ajuda seu animal a ter fezes mais firmes, o que facilita a limpeza.

        Não bastasse isso, a Ração Úmida Pedigree Adulto Raças Pequenas Carne é livre de corantes, aromatizantes e conservantes artificiais, o que ajuda na saúde do seu cão. Ela é produzida pela Pedigree, referência há décadas em alimentos de qualidade e procedência garantidas.`,
        categoriaAnimal: 'cachorro',
        categoriaAba: 'mais-vendidos'
        },
    {
        imagemAtributos: 'src="./img/produto-antipulga.svg" alt="Antipulgas Simparic 10kg a 20kg de 40mg"',
        h2Titulo: 'Antipulgas Simparic 10kg a 20kg de 40mg',
        pInformacoes: 'Ideal para cachorros de 10kg a 20kg',
        pValor: 'R$107,91',
        cod: '004',
        descricao: `Assim como nós da Cobasi, temos certeza de que como tutor de pet, tudo o que você quer é proteger seu amiguinho. Para isso, conheça o Simparic 10kg a 20kg de 40mg, desenvolvido pela Zoetis e vendido aqui na Cobasi.

        Como é normal ter dúvidas sobre remédios para cachorro, mesmo em tutores mais experientes, falaremos a seguir as principais informações presentes na bula do Simparic 40mg e tudo que você vai querer saber sobre o medicamento.`,
        categoriaAnimal: 'cachorro',
        categoriaAba: 'lancamentos'
        },
    {
        imagemAtributos: 'src="./img/produto-dipirona.svg" alt="Dipirona Gotas para Cães e Gatos"',
        h2Titulo: 'Dipirona Gotas para Cães e Gatos',
        pInformacoes: 'Medicamento indicado para tratar casos de dor e febre',
        pValor: 'R$28,90',
        cod: '005',
        descricao: `Dipirona Biovet é um medicamento indicado para tratar casos de dor e febre, tanto agudas quanto crônicas, em cães e gatos. Seu uso é recomendado em diversas etiologias, sendo necessário consultar um médico-veterinário antes de iniciar sua utilização.

        Modo de uso de Dipirona Biovet
        
        Dipirona Gotas Biovet é um medicamento de uso oral. Pode ser administrado diretamente na boca do animal ou diluído em água, suco ou leite. Nesses casos, é fundamental garantir que o animal beba todo o líquido disponível, para não comprometer a dose adequada ao seu peso e idade, bem como os resultados esperados do tratamento.`,
        categoriaAnimal: ['gato','cachorro'],
        categoriaAba: ['promocao', 'mais-vendidos']
        },
    {
        imagemAtributos: 'src="./img/produto-racao.svg" alt="Ração Golden Special para Cães Adultos Frango e Carne"',
        h2Titulo: 'Ração Golden Special para Cães Adultos Frango e Carne',
        pInformacoes: 'Ideal para cachorros com mais de 6 meses',
        pValor: 'R$129,90',
        cod: '006',
        descricao: `Formulada com nobres ingredientes, a Ração Golden Special para Cães Adultos Frango e Carne é o alimento ideal para manter o seu cão saudável. Além de ser livre de corantes e aromatizantes artificiais, proporciona uma dieta mais balanceada.

        Ajudando a eliminar o odor das fezes, a Ração Golden Special conta com uma fórmula que é rica em vitaminas e minerais. Isso faz com que a musculatura do animal sempre esteja fortalecida, o que consequentemente torna o cão mais ativo e menos propenso a doenças.`,
        categoriaAnimal: 'cachorro',
        categoriaAba: ['promocao','mais-vendidos','lancamentos']
        },
    {
        imagemAtributos: 'src="./img/produto-aquario.svg" alt="Aquário Faixa Preta Bivolt Lester"',
        h2Titulo: 'Aquário Faixa Preta Bivolt Lester',
        pInformacoes: 'Ideal para harmonizar o ambiente',
        pValor: 'R$178,90',
        cod: '007',
        descricao: `O Aquário Faixa Preta Bivolt Lester é ideal para você deixar seu ambiente mais harmonioso e aconchegante e cuidar de aquários é uma atividade relaxante ajudando a aliviar o estresse do dia a dia.

        Peixes são animais de estimação ideais para quem tem menos espaço em casa e não tem tanto tempo livre para brincar com os pets. Há uma enorme variedade de espécies, cores e características. É só você escolher os que mais te agradam.`,
        categoriaAnimal: 'outros-animais',
        categoriaAba: 'lancamentos'
        },
    {
        imagemAtributos: 'src="./img/produto-feno.svg" alt="Feno Belas Aves e Roedores"',
        h2Titulo: 'Feno Belas Aves e Roedores',
        pInformacoes: 'Ideal para aves e roedores',
        pValor: 'R$15,40',
        cod: '008',
        descricao: `O feno é fundamental na alimentação dos roedores, possuindo fibras vitais para o sistema digestivo e por isso devem ser o principal constituinte da dieta juntamente à água.

        Pode ser oferecido todos os dias ao seu pet, pois ele auxilia no desgaste dos dentes que não param de crescer e auxilia na formação do bolo alimentar e na eliminação de pelos ingeridos.
        
        O hábito de roer pode contribuir para deixá-lo relaxado e desestressado.`,
        categoriaAnimal: 'outros-animais',
        categoriaAba: 'lancamentos'
        },
    {
        imagemAtributos: 'src="./img/produto-serragem.svg" alt="Serragem para Hamster Prensada Fogo e Faísca"',
        h2Titulo: 'Serragem para Hamster Prensada Fogo e Faísca',
        pInformacoes: 'Desenvolvida para Hamsters de todos tipos',
        pValor: 'R$7,90',
        cod: '009',
        descricao: `A Serragem para Hamster Prensada é uma opção ideal de escolha para criar um ambiente seguro e acolhedor para seu hamster. Feita de pinus, uma madeira renovável, essa serragem prensada garante um espaço limpo e saudável, eliminando poeira e detritos soltos.

        Com uma textura suave é adequada para as patas sensíveis dos hamsters e auxilia na absorção da umidade e odor, mantendo o ambiente fresco.
        
        Desenvolvida especialmente para hamsters, a Serragem Prensada atende às necessidades naturais de escavação e exploração dos hamsters.`,
        categoriaAnimal: 'outros-animais',
        categoriaAba: ['lancamentos','promocao']
        },
    {
        imagemAtributos: 'src="./img/produto-osso-brinquedo.svg" alt="Brinquedo Osso Flexi Bone Laranja Odontopet"',
        h2Titulo: 'Brinquedo Osso Flexi Bone Laranja Odontopet',
        pInformacoes: 'Ideal para cães de todas idades',
        pValor: 'R$21,26',
        cod: '010',
        descricao: `O Brinquedo Osso Flexi Bone Laranja Odontopet é produzido em resina termoplástica totalmente atóxica, com aroma menta irresistível aos cães. A pressão exercida pela mandíbula de um cachorro é considerável, por isso recomenda-se mordedores não comestíveis para encorajar a mastigação.

        Satisfaz o desejo de mastigar por mais tempo. Diminui o tédio ajudando na limpeza dos dentes. Com material de primeira qualidade, 100% original e com tecnologia antibacteriana natural e específica contra germes, bactérias e outros microrganismos.`,
        categoriaAnimal: 'cachorro',
        categoriaAba: ['lancamentos','promocao']
        },
    {
        imagemAtributos: 'src="./img/produto-bebedouro.svg" alt="Bebedouro para Pássaros Tudo Pet Amarelo"',
        h2Titulo: 'Bebedouro para Pássaros Tudo Pet Amarelo',
        pInformacoes: 'Ideal para manter o seu pet hidratado a qualquer hora do dia',
        pValor: 'R$5,50',
        cod: '011',
        descricao: `O Bebedouro para Pássaros Tudo Pet Amarelo é ideal para manter o seu pet hidratado a qualquer hora do dia, mantendo a água fresca a todo momento.

        De prático manuseio, o bebedouro Tudo Pet possui um suporte na parte superior para encaixar na grade do viveiro ou gaiola, assim você consegue encaixar de forma que fique fácil para sua ave se hidratar.`,
        categoriaAnimal: 'outros-animais',
        categoriaAba: ['lancamentos','mais-vendidos']
        },
    {
        imagemAtributos: 'src="./img/produto-caminha.svg" alt="Cama Retangular Carmel Fábrica Pet Rosa"',
        h2Titulo: 'Cama Retangular Carmel Fábrica Pet Rosa',
        pInformacoes: 'Confortável e estilosa',
        pValor: 'R$89,90',
        cod: '012',
        descricao: `A Cama Retangular Carmel Fábrica Pet Rosa é perfeita para o seu pet! Conforto e estilo, tudo que cães e gatos precisam na hora de descansar.

        Essa cama retangular foi elaborada pensando em trazer sempre o máximo de conforto. Feita com um tecido macio e com enchimento em fibra siliconada que não retém a umidade.`,
        categoriaAnimal: ['cachorro','gato','outros-animais'],
        categoriaAba: ['mais-vendidos','promocao']
        },
    {
        imagemAtributos: 'src="./img/produto-comedouro.svg" alt="Comedouro Lateral com Poleiro Animalíssimo"',
        h2Titulo: 'Comedouro Lateral com Poleiro Animalíssimo',
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
        imagemAtributos: 'src="./img/produto-aditivo.svg" alt="Aditivo Probiótico Pet"',
        h2Titulo: 'Aditivo Probiótico Pet',
        pInformacoes: 'Suplementação com micro-organismos vivos',
        pValor: 'R$33,31',
        cod: '014',
        descricao: `O Aditivo Probiótico Pet é um medicamento indicado para cães e gatos de todas as idades e que estejam precisando fazer o uso de uma suplementação com micro-organismos vivos para o equilíbrio da microbiota intestinal.

        Para que serve o probiótico pet?
        
        A fórmula deste medicamento é composta por Lactobacillus acidophilus e Enterococcus faecium e tem como objetivo recompor e equilibrar a flora intestinal do seu pet. Dessa forma, o produto age com muita eficácia e rapidez, evitando diarréias alimentares e outros tipos de desconforto intestinal.`,
        categoriaAnimal: ['cachorro','gato'],
        categoriaAba: 'promocao'
        },
    {
        imagemAtributos: 'src="./img/produto-adestrador-click.svg" alt="Adestrador Click-R Pet Safe"',
        h2Titulo: 'Adestrador Click-R Pet Safe',
        pInformacoes: 'Utilizado para adestrar cães com reforços positivos',
        pValor: 'R$58,41',
        cod: '015',
        descricao: `O Adestrador Click-R Pet Safe é um dispositivo utilizado para adestrar cães com reforços positivos associados a recompensas de carinhos e petiscos.

        É o produto ideal para quem quer se aventurar pelo mundo do adestramento ou mesmo para adestradores experientes. Possui uma alça de dedo que dá mais conforto e facilidade para segurar o clicker.
        
        Ao apertar o botão do Click-R ele produz um som fazendo com que seu animal de estimação esteja pronto para entender o comando, o ideal é sempre estar com petiscos ou um agrado para dizer ao pet que ele está fazendo um bom trabalho.`,
        categoriaAnimal: 'cachorro',
        categoriaAba: ['promocao', 'mais-vendidos']
        },
    {
        imagemAtributos: 'src="./img/produto-coelheira.svg" alt="Coelheira Bandeja e Toca Monaco"',
        h2Titulo: 'Coelheira Bandeja e Toca Monaco',
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
        imagemAtributos: 'src="./img/produto-ratinho.svg" alt="Brinquedo Ratinho Fofo para Gatos Meow&Me"',
        h2Titulo: 'Brinquedo Ratinho Fofo para Gatos Meow&Me',
        pInformacoes: 'Ideal para gatos com mais de 6 meses',
        pValor: 'R$17,21',
        cod: '017',
        descricao: `Um brinquedo divertido que proporciona brincadeiras diversas. Ratinho com penas, melhor distrativo para gato. Previne o sedentarismo e a ansiedade, estimulando a atividade física.

        Brincar proporciona exercícios divertidos e entretenimento, mantém seu animal de estimação ativo mentalmente e fisicamente.`,
        categoriaAnimal: 'gato',
        categoriaAba: 'promocao'
        },
    {
        imagemAtributos: 'src="./img/produto-areia.svg" alt="Areia Pipicat Classic para Gatos"',
        h2Titulo: 'Areia Pipicat Classic para Gatos',
        pInformacoes: 'Ideal para gatos',
        pValor: 'R$17,71',
        cod: '018',
        descricao: `A Areia Pipicat Classic é uma das sugestões de banheiros para felinos mais procuradas do mercado. Além de ser uma opção fácil de usar, descartar e de combate ao mau odor, ela conta com um preço acessível, o que garante um ótimo custo-benefício para os tutores.

        Por que ter areia sanitária para gatos em casa?
        
        O principal motivo para ter em casa a areia sanitária Pipicat Classic é proporcionar um local limpo e atrativo para que o seu pet possa fazer as necessidades básicas. Isso sem falar que basta uma pá e um saco para higienizar o banheiro do gato e livrar a casa de odores indesejados.`,
        categoriaAnimal: 'gato',
        categoriaAba: ['promocao','mais-vendidos']
        },
    {
        imagemAtributos: 'src="./img/produto-varinha.svg" alt="Varinha para Gatos Bolinha com Plumas Meow & Me"',
        h2Titulo: 'Varinha para Gatos Bolinha com Plumas Meow & Me',
        pInformacoes: 'Ideal para gatos com mais de 6 meses',
        pValor: 'R$21,90',
        cod: '019',
        descricao: `Seu gato vai adorar se divertir com esse brinquedo interativo, que é uma ótima forma de manter seu pet ativo mentalmente e fisicamente.
        Além de conter um pequeno sino dentro da bolinha, que vai estimular seu gatinho á brincadeira.
        Os gatos são animais independentes e necessitam que seus instintos naturais sejam estimulados para se sentirem ainda mais felizes.
        A Varinha é uma ótima opção para aproximar você e seu pet cada dia mais!
        
        Produto destinado exclusivamente ao uso animal.`,
        categoriaAnimal: 'gato',
        categoriaAba: 'promocao'
        },
    {
        imagemAtributos: 'src="./img/produto-capa-chuva.svg" alt="Capa de Chuva para Cachorro Rosa Bichinho Chic"',
        h2Titulo: 'Capa de Chuva para Cachorro Rosa Bichinho Chic',
        pInformacoes: 'Ideal para cachorros',
        pValor: 'R43,90',
        cod: '020',
        descricao: `A Capa de Chuva para Cachorro Rosa Bichinho Chic conta com um capuz, que além de proteger ainda deixará seu pet estiloso, ideal para os passeios em dias chuvosos.

        A Capa para Cães com Capuz foi produzida em plástico PVC transparente com uma borda em acabamento colorido dando um lindo contraste além de possuir também passagem para a guia e fitas de ajuste na cintura e pescoço.`,
        categoriaAnimal: 'cachorro',
        categoriaAba: 'mais-vendidos'
        },
    {
        imagemAtributos: 'src="./img/produto-meia.svg" alt="Meia Sapato HomePet Rosa"',
        h2Titulo: 'Meia Sapato HomePet Rosa',
        pInformacoes: 'Vai esquentar as patinhas do seu pet',
        pValor: 'R$21,90',
        cod: '021',
        descricao: `A Meia Sapato HomePet Rosa é um produto feito para deixar seu pet com estilo e com as patinhas bem protegidas. Acessório que vai esquentar as patinhas do seu pet.
        Produzida em 80% algodão 20% poliéster e possui parte antiderrapante para evitar possíveis acidentes. Embalagem contém 4 unidades do mesmo tamanho.
        As meias além de esquentar as patinhas do seu pet, protegem seu piso, o banco e vidros do carro, de possíveis arranhões, além de evitar possíveis barulhos em piso no caso de apartamentos.`,
        categoriaAnimal: ['cachorro','gato','outros-animais'],
        categoriaAba: ['promocao','mais-vendidos']
        },
    {
        imagemAtributos: 'src="./img/produto-vestido.svg" alt="Vestido Elegance Bichinho Chic Rosa"',
        h2Titulo: 'Vestido Elegance Bichinho Chic Rosa',
        pInformacoes: 'Confeccionado em tecido de algodão',
        pValor: 'R$27,81',
        cod: '022',
        descricao: `O Vestido Elegance Bichinho Chic Rosa é um item indispensável no guarda-roupas do seu pet. Estiloso e confortável, garante que o seu pet fique muito mais charmoso. Confeccionado em tecido de algodão e botões personalizados Bichinho Chic.

        Hoje em dia a quantidade de roupinhas para os pets é enorme, deixando-os mais estilosos e confortáveis a todo momento. E na Cobasi você encontra o Vestido Elegance Bichinho Chic Rosa com um preço especial.`,
        categoriaAnimal: ['cachorro','gato','outros-animais'],
        categoriaAba: 'mais-vendidos'
        },
    {
        imagemAtributos: 'src="./img/produto-roda-exercicio.svg" alt="Roda de Exercício para Roedores Savana Azul"',
        h2Titulo: 'Roda de Exercício para Roedores Savana Azul',
        pInformacoes: 'Ideal para roedores',
        pValor: 'R$31,41',
        cod: '023',
        descricao: `A Roda de Exercício para Roedores Savana Azul é a forma segura e divertida de exercitar, distrair e diminuir o estresse dos pequenos roedores.
        Brinquedo com design simples, é feito com acrílico de qualidade que garante segurança e conforto para o seu pet durante o uso.
        Eficaz e extremamente silenciosa, a roda de exercício pode ser montada de duas formas: fixada na gaiola ou com o suporte de chão.
        `,
        categoriaAnimal: 'outros-animais',
        categoriaAba: 'promocao'
        },
    {
        imagemAtributos: 'src="./img/produto-transporte.svg" alt="Caixa de Transporte"',
        h2Titulo: 'Caixa de Transporte',
        pInformacoes: 'Alta qualidade, com furos nas laterais',
        pValor: 'R$287,81',
        cod: '024',
        descricao: `Produzida com material de alta qualidade, com furos nas laterais, proporcionando todo conforto necessário durante o transporte.

        É imprescindível saber as medidas do seu pet na hora de comprar a caixa de transporte.
        A Caixa de transporte C-Pet possui muitos diferenciais. Disponível do tamanho extra pequeno até gigante, que suporta animais de até 61 kg, é desenvolvida com material resistente e durável.`,
        categoriaAnimal: ['cachorro','gato','outros-animais'],
        categoriaAba: ['promocao','mais-vendidos']
        },
    {
        imagemAtributos: 'src="./img/produto-globo.svg" alt="Globo Acrílico para Hamster com Suporte 4 em 1 Savana Azul"',
        h2Titulo: 'Globo Acrílico para Hamster com Suporte 4 em 1 Savana Azul',
        pInformacoes: 'Extremamente silencioso',
        pValor: 'R$24,21',
        cod: '025',
        descricao: `O Globo Acrílico para Hamster com Suporte 4 em 1 Savana Azul é a forma mais divertida para entreter Hamsters e pequenos roedores.
        Feito com materiais resistentes e design simples, é eficaz e extremamente silencioso, o Globo Acrílico com Suporte possui diâmetro total de 11,5cm que dá segurança e conforto na hora de brincar.`,
        categoriaAnimal: 'outros-animais',
        categoriaAba: 'promocao'
        },
    {
        imagemAtributos: 'src="./img/produto-bomba" alt="Bomba Submersa para Fonte H190"',
        h2Titulo: 'Bomba Submersa para Fonte H190',
        pInformacoes: 'Circula até 35 litros de água',
        pValor: 'R$55,71',
        cod: '026',
        descricao: `A Bomba Submersa para Fonte H190 foi desenvolvida com a mais alta tecnologia, indicada para fontes e circulação de água em aquários de até 35 litros.
        Silenciosa e segura, a Bomba Submersa H190 VigoAr é essencial para obter um ambiente oxigenado para os peixes. Para as fontes, ela pode chegar a uma altura de 45 centímetros.`,
        categoriaAnimal: 'outros-animais',
        categoriaAba: 'mais-vendidos'
        },
    {
        imagemAtributos: 'src="./img/produto-cascalho.svg" alt="Cascalho para Aquário Aqua Pedras"',
        h2Titulo: 'Cascalho para Aquário Aqua Pedras',
        pInformacoes: 'Não altera o PH da água',
        pValor: 'R$21,90',
        cod: '027',
        descricao: `O Cascalho para Aquário Aqua Pedras é feito à base de cascalho de cristal quartzo natural, colorido à base de resina e corantes atóxicos, ideal para aquários, pois além de trazer um layout bonito não altera o ph da água.
        Todo aquário precisa de uma base para que a vida dos peixes e plantas tenha qualidade. Comece escolhendo o Substrato para Aquários Aqua Pedras Cascalho de Quartzo Natural.`,
        categoriaAnimal: 'outros-animais',
        categoriaAba: ['promocao','mais-vendidos']
        },
    {
        imagemAtributos: 'src="./img/produto-racao-peixe.svg" alt="Ração Color Flakes Tetra"',
        h2Titulo: 'Ração Color Flakes Tetra',
        pInformacoes: 'Ideal para peixes',
        pValor: 'R$22,41',
        cod: '028',
        descricao: `A Ração Color Flakes Tetra foi desenvolvida como alimento diário para todos os peixes tropicais, possui uma mistura com ingredientes de alta qualidade de modo que os peixes adoram.
        Sua composição auxilia o desenvolvimento dos peixes e mantém a sua água limpa por mais tempo, já que ela não libera dejetos no aquário. Contém uma mistura elaborada com ingredientes exclusivos, vitaminas e minerais incluindo farinha de peixe, para a palatabilidade.`,
        categoriaAnimal: 'outros-animais',
        categoriaAba: 'promocao'
        },
    {
        imagemAtributos: 'src="./img/produto-pote.svg" alt="Comedouro Colors Flicks Azul"',
        h2Titulo: 'Comedouro Colors Flicks Azul',
        pInformacoes: 'Indicado para cães e gatos',
        pValor: 'R$15,90',
        cod: '029',
        descricao: `O Comedouro Colors Flicks Azul é indicado para cães e gatos de todos tamanhos e portes. Feito em aço inox resistente, tem ótima durabilidade e sua base possui borda de borracha natural, que o torna antideslizante.
        O comedouro para cachorro e gato pode ser usado para ração seca, ração úmida ou água que ficarão frescos por mais tempo deixando a hora da alimentação do seu pet mais agradável.`,
        categoriaAnimal: ['cachorro','gato'],
        categoriaAba: 'mais-vendidos'
        },
    {
        imagemAtributos: 'src="./img/produto-bifinho.svg" alt="Petisco Mini Bifinho Keldog Carne"',
        h2Titulo: 'Petisco Mini Bifinho Keldog Carne',
        pInformacoes: 'Para seu pet, defumado e suculento',
        pValor: 'R$23,22',
        cod: '030',
        descricao: `O Petisco Mini Bifinho Keldog Carne é macio e saboroso! Perfeito para todos os momentos é o petisco ideal para um lanche nos passeios, demonstração de afeto e prêmio de adestramento.
        Esse Petisco para Cachorro tem um delicioso sabor defumado e suculento, feito com carnes selecionadas é indicado para cães de todos os portes. Seu pet vai amar!
        `,
        categoriaAnimal: ['cachorro','gato','outros-animais'],
        categoriaAba: ['promocao','lancamentos','mais-vendidos']
        },
    ]

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
