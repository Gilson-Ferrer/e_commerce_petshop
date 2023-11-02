const todosProdutos = [
  {
      imagemAtributos: "./object_imgs/produto-racaoumida-gato.svg",
      h2Titulo: 'Ração umida para Gatos',
      pInformacoes: 'Ideal para gatos com mais de 6 meses',
      pValor: 'R$ 3.99',
      cod: '000',
      descricao: `Um alimento completo, a Ração Úmida Golden Gourmet Gatos Castrados Carne é enriquecida com vitaminas e minerais que atentem as necessidades dos gatos castrados a partir dos 6 meses de idade.

      `,
      categoriaAnimal: 'gato',
      categoriaAba: 'mais-vendidos'
      },
  {
      imagemAtributos: "./object_imgs/produto-ninho-corda.svg",
      h2Titulo: 'Ninho de Corda Kakatoo',
      pInformacoes: 'Lar ideal para nidificação das aves',
      pValor: 'R$ 17.90',
      cod: '001',
      descricao: `O Ninho de Corda Kakatoo é feito de corda costurado com suporte metálico soldado. Indicado para Bicudos e outros passeriformes pequenos que criem em ninhos abertos.
  
      `,
      categoriaAnimal: 'outros-animais',
      categoriaAba: 'promocao'
      },
  {
      imagemAtributos: "./object_imgs/produto-racaoumida-cao.svg",
      h2Titulo: 'Ração umida para Cães',
      pInformacoes: 'Ideal para cães pequeno ou médio porte',
      pValor: 'R$ 3.99',
      cod: '002',
      descricao: `A Ração Úmida Pedigree Adulto Raças Pequenas Carne é composta por proteínas de altíssima qualidade. A carne, cozida no vapor, além de saudável é muito saborosa. 
      `,
      categoriaAnimal: 'cachorro',
      categoriaAba: 'mais-vendidos'
      },
  {
      imagemAtributos: "./object_imgs/produto-antipulga.svg",
      h2Titulo: 'Antipulgas Simparic 10kg a 20kg de 40mg',
      pInformacoes: 'Ideal para cachorros de 10kg a 20kg',
      pValor: 'R$ 107.91',
      cod: '003',
      descricao: `Assim como nós da Cobasi, temos certeza de que como tutor de pet, tudo o que você quer é proteger seu amiguinho. Para isso, conheça o Simparic 10kg a 20kg de 40mg.
      `,
      categoriaAnimal: 'cachorro',
      categoriaAba: 'lancamentos'
      },
  {
      imagemAtributos: "./object_imgs/produto-dipirona.svg",
      h2Titulo: 'Dipirona Gotas Cães e Gatos',
      pInformacoes: 'Medicamento indicado para tratar casos de dor e febre',
      pValor: 'R$ 28.90',
      cod: '004',
      descricao: `Dipirona Biovet é um medicamento indicado para tratar casos de dor e febre, tanto agudas quanto crônicas, em cães e gatos. Seu uso é recomendado em diversas etiologias.
      `,

      categoriaAnimal: ['gato','cachorro'],
      categoriaAba: ['promocao', 'mais-vendidos']
      },
  {
      imagemAtributos: "./object_imgs/produto-racao.svg",
      h2Titulo: 'Ração Golden Special para Cães ',
      pInformacoes: 'Ideal para cachorros com mais de 6 meses',
      pValor: 'R$ 129.90',
      cod: '005',
      descricao: `Formulada com nobres ingredientes, a Ração Golden Special para Cães Adultos Frango e Carne é o alimento ideal para manter o seu cão saudável. Além de ser livre de corantes e aromatizantes artificiais.
      `,

      categoriaAnimal: 'cachorro',
      categoriaAba: ['promocao','mais-vendidos','lancamentos']
      },
  {
      imagemAtributos: "./object_imgs/produto-aquario.svg",
      h2Titulo: 'Aquário Faixa Preta Bivolt Lester',
      pInformacoes: 'Ideal para harmonizar o ambiente',
      pValor: 'R$ 178.90',
      cod: '006',
      descricao: `O Aquário Faixa Preta Bivolt Lester é ideal para você deixar seu ambiente mais harmonioso e aconchegante e cuidar de aquários é uma atividade relaxante ajudando a aliviar o estresse do dia a dia.
      `,
      categoriaAnimal: 'outros-animais',
      categoriaAba: 'lancamentos'
      },
  {
      imagemAtributos: "./object_imgs/produto-feno.svg",
      h2Titulo: 'Feno Belas Aves e Roedores',
      pInformacoes: 'Ideal para aves e roedores',
      pValor: 'R$ 15.40',
      cod: '007',
      descricao: `O feno é fundamental na alimentação dos roedores, possuindo fibras vitais para o sistema digestivo e por isso devem ser o principal constituinte da dieta juntamente à água.
      `,
      categoriaAnimal: 'outros-animais',
      categoriaAba: 'lancamentos'
      },
  {
      imagemAtributos: "./object_imgs/produto-serragem.svg",
      h2Titulo: 'Serragem para Hamster Prensada Fogo e Faísca',
      pInformacoes: 'Desenvolvida para Hamsters de todos tipos',
      pValor: 'R$ 7.90',
      cod: '008',
      descricao: `A Serragem para Hamster Prensada é uma opção ideal de escolha para criar um ambiente seguro e acolhedor para seu hamster. Feita de pinus, uma madeira renovável.

      `,
      categoriaAnimal: 'outros-animais',
      categoriaAba: ['lancamentos','promocao']
      },
  {
      imagemAtributos: "./object_imgs/produto-osso-brinquedo.svg",
      h2Titulo: 'Brinquedo Osso Flexi Bone Laranja Odontopet',
      pInformacoes: 'Ideal para cães de todas idades',
      pValor: 'R$ 21.26',
      cod: '009',
      descricao: `O Brinquedo Osso Flexi Bone Laranja Odontopet é produzido em resina termoplástica totalmente atóxica, com aroma menta irresistível aos cães. A pressão exercida pela mandíbula de um cachorro é considerável.

      `,
      categoriaAnimal: 'cachorro',
      categoriaAba: ['lancamentos','promocao']
      },
  {
      imagemAtributos: "./object_imgs/produto-bebedouro.svg",
      h2Titulo: 'Bebedouro para Pássaros Tudo Pet Amarelo',
      pInformacoes: 'Ideal para manter o seu pet hidratado a qualquer hora do dia',
      pValor: 'R$ 5.50',
      cod: '010',
      descricao: `O Bebedouro para Pássaros Tudo Pet Amarelo é ideal para manter o seu pet hidratado a qualquer hora do dia, mantendo a água fresca a todo momento.

      `,
      categoriaAnimal: 'outros-animais',
      categoriaAba: ['lancamentos','mais-vendidos']
      },
  {
      imagemAtributos: "./object_imgs/produto-caminha.svg",
      h2Titulo: 'Cama Retangular Carmel Fábrica Pet Rosa',
      pInformacoes: 'Confortável e estilosa',
      pValor: 'R$ 89.90',
      cod: '011',
      descricao: `A Cama Retangular Carmel Fábrica Pet Rosa é perfeita para o seu pet! Conforto e estilo, tudo que cães e gatos precisam na hora de descansar.

      `,
      categoriaAnimal: ['cachorro','gato','outros-animais'],
      categoriaAba: ['mais-vendidos','promocao']
      },
  {
      imagemAtributos: "./object_imgs/produto-comedouro.svg",
      h2Titulo: 'Comedouro Lateral com Poleiro Animalíssimo',
      pInformacoes: 'Comedouro para alimentar seu pet com mais estilo',
      pValor: 'R$ 12.30',
      cod: '012',
      descricao: `Comedouro para alimentar seu pet com mais estilo.
      Recipiente pra colocar o alimento do seu pássaro em um local amplo e limpo, produzido com 2 aberturas e poleiro para facilitar a alimentação do seu pássaro.
      Feito com excelente material pra não acumular sujeira e fácil de limpar.
      `,
      categoriaAnimal: ['cachorro','gato','outros-animais'],
      categoriaAba: 'mais-vendidos'
      },
  {
      imagemAtributos: "./object_imgs/produto-aditivo.svg",
      h2Titulo: 'Aditivo Probiótico Pet',
      pInformacoes: 'Suplementação com micro-organismos vivos',
      pValor: 'R$ 33.31',
      cod: '013',
      descricao: `O Aditivo Probiótico Pet é um medicamento indicado para cães e gatos de todas as idades e que estejam precisando fazer o uso de uma suplementação com micro-organismos vivos para o equilíbrio da microbiota intestinal.
           
      `,
      categoriaAnimal: ['cachorro','gato'],
      categoriaAba: 'promocao'
      },
  {
      imagemAtributos: "./object_imgs/produto-adestrador-click.svg",
      h2Titulo: 'Adestrador Click-R Pet Safe',
      pInformacoes: 'Utilizado para adestrar cães com reforços positivos',
      pValor: 'R$ 58.41',
      cod: '014',
      descricao: `O Adestrador Click-R Pet Safe é um dispositivo utilizado para adestrar cães com reforços positivos associados a recompensas de carinhos e petiscos.

      `,
      categoriaAnimal: 'cachorro',
      categoriaAba: ['promocao', 'mais-vendidos']
      },
  {
      imagemAtributos: "./object_imgs/produto-coelheira.svg",
      h2Titulo: 'Coelheira Bandeja e Toca Monaco',
      pInformacoes: 'Ideal para segurança de seus coelhos',
      pValor: 'R$ 407.30',
      cod: '015',
      descricao: `Os coelhos têm o hábito de roer e, por isso, deixá-los soltos em casa sem a supervisão dos tutores pode ser perigoso, principalmente se houver fiação ou equipamentos eletrônicos no chão da residência.

      `,
      categoriaAnimal: 'outros-animais',
      categoriaAba: 'mais-vendidos'
      },
  {
      imagemAtributos: "./object_imgs/produto-ratinho.svg",
      h2Titulo: 'Brinquedo Ratinho Fofo para Gatos Meow&Me',
      pInformacoes: 'Ideal para gatos com mais de 6 meses',
      pValor: 'R$ 17.21',
      cod: '016',
      descricao: `Um brinquedo divertido que proporciona brincadeiras diversas. Ratinho com penas, melhor distrativo para gato. Previne o sedentarismo e a ansiedade, estimulando a atividade física.

      `,
      categoriaAnimal: 'gato',
      categoriaAba: 'promocao'
      },
  {
      imagemAtributos: "./object_imgs/produto-areia.svg",
      h2Titulo: 'Areia Pipicat Classic para Gatos',
      pInformacoes: 'Ideal para gatos',
      pValor: 'R$ 17.71',
      cod: '017',
      descricao: `A Areia Pipicat Classic é uma das sugestões de banheiros para felinos mais procuradas do mercado. Além de ser uma opção fácil de usar, descartar e de combate ao mau odor, ela conta com um preço acessível.

      `,
      categoriaAnimal: 'gato',
      categoriaAba: ['promocao','mais-vendidos']
      },
  {
      imagemAtributos: "./object_imgs/produto-varinha.svg",
      h2Titulo: 'Varinha para Gatos Bolinha com Plumas Meow & Me',
      pInformacoes: 'Ideal para gatos com mais de 6 meses',
      pValor: 'R$ 21.90',
      cod: '018',
      descricao: `Seu gato vai adorar se divertir com esse brinquedo interativo, que é uma ótima forma de manter seu pet ativo mentalmente e fisicamente,além de conter um pequeno sino dentro da bolinha.
     `,
      categoriaAnimal: 'gato',
      categoriaAba: 'promocao'
      },
  {
      imagemAtributos: "./object_imgs/produto-capa-chuva.svg",
      h2Titulo: 'Capa de Chuva para Cachorro Rosa Bichinho Chic',
      pInformacoes: 'Ideal para cachorros',
      pValor: 'R$ 43.90',
      cod: '019',
      descricao: `A Capa de Chuva para Cachorro Rosa Bichinho Chic conta com um capuz, que além de proteger ainda deixará seu pet estiloso, ideal para os passeios em dias chuvosos.

      `,
      categoriaAnimal: 'cachorro',
      categoriaAba: 'mais-vendidos'
      },
  {
      imagemAtributos: "./object_imgs/produto-meia.svg",
      h2Titulo: 'Meia Sapato HomePet Rosa',
      pInformacoes: 'Vai esquentar as patinhas do seu pet',
      pValor: 'R$ 21.90',
      cod: '020',
      descricao: `A Meia Sapato HomePet Rosa é um produto feito para deixar seu pet com estilo e com as patinhas bem protegidas. Acessório que vai esquentar as patinhas do seu pet.
      `,
      categoriaAnimal: ['cachorro','gato','outros-animais'],
      categoriaAba: ['promocao','mais-vendidos']
      },
  {
      imagemAtributos: "./object_imgs/produto-vestido.svg",
      h2Titulo: 'Vestido Elegance Bichinho Chic Rosa',
      pInformacoes: 'Confeccionado em tecido de algodão',
      pValor: 'R$ 27.81',
      cod: '021',
      descricao: `O Vestido Elegance Bichinho Chic Rosa é um item indispensável no guarda-roupas do seu pet. Estiloso e confortável, garante que o seu pet fique muito mais charmoso.
      `,
      categoriaAnimal: ['cachorro','gato','outros-animais'],
      categoriaAba: 'mais-vendidos'
      },
  {
      imagemAtributos: "./object_imgs/produto-roda-exercicio.svg",
      h2Titulo: 'Roda de Exercício para Roedores Savana Azul',
      pInformacoes: 'Ideal para roedores',
      pValor: 'R$ 31.41',
      cod: '022',
      descricao: `A Roda de Exercício para Roedores Savana Azul é a forma segura e divertida de exercitar, distrair e diminuir o estresse dos pequenos roedores.
      Brinquedo com design simples, é feito com acrílico.
      `,
      categoriaAnimal: 'outros-animais',
      categoriaAba: 'promocao'
      },
  {
      imagemAtributos: "./object_imgs/produto-transporte.svg",
      h2Titulo: 'Caixa de Transporte',
      pInformacoes: 'Alta qualidade, com furos nas laterais',
      pValor: 'R$ 287.81',
      cod: '023',
      descricao: `Produzida com material de alta qualidade, com furos nas laterais, proporcionando todo conforto necessário durante o transporte.

      `,
      categoriaAnimal: ['cachorro','gato','outros-animais'],
      categoriaAba: ['promocao','mais-vendidos']
      },
  {
      imagemAtributos: "./object_imgs/produto-globo.svg",
      h2Titulo: 'Globo Acrílico para Hamster com Suporte 4 em 1 Savana Azul',
      pInformacoes: 'Extremamente silencioso',
      pValor: 'R$ 24.21',
      cod: '024',
      descricao: `O Globo Acrílico para Hamster com Suporte 4 em 1 Savana Azul é a forma mais divertida para entreter Hamsters e pequenos roedores.
      Feito com materiais resistentes e design simples.
      `,
      categoriaAnimal: 'outros-animais',
      categoriaAba: 'promocao'
      },
  {
      imagemAtributos: "./object_imgs/produto-bomba.svg",
      h2Titulo: 'Bomba Submersa para Fonte H190',
      pInformacoes: 'Circula até 35 litros de água',
      pValor: 'R$ 55.71',
      cod: '025',
      descricao: `A Bomba Submersa para Fonte H190 foi desenvolvida com a mais alta tecnologia, indicada para fontes e circulação de água em aquários de até 35 litros.
      Silenciosa e segura, a Bomba Submersa H190 VigoAr é essencial para aquários
      `,
      categoriaAnimal: 'outros-animais',
      categoriaAba: 'mais-vendidos'
      },
  {
      imagemAtributos: "./object_imgs/produto-cascalho.svg",
      h2Titulo: 'Cascalho para Aquário Aqua Pedras',
      pInformacoes: 'Não altera o PH da água',
      pValor: 'R$ 21.90',
      cod: '026',
      descricao: `O Cascalho para Aquário Aqua Pedras é feito à base de cascalho de cristal quartzo natural, colorido à base de resina e corantes atóxicos, ideal para aquários, pois além de trazer um layout bonito não altera o ph da água.
      
      `,
      categoriaAnimal: 'outros-animais',
      categoriaAba: ['promocao','mais-vendidos']
      },
  {
      imagemAtributos: "./object_imgs/produto-racao-peixe.svg",
      h2Titulo: 'Ração Color Flakes Tetra',
      pInformacoes: 'Ideal para peixes',
      pValor: 'R$ 22.41',
      cod: '027',
      descricao: `A Ração Color Flakes Tetra foi desenvolvida como alimento diário para todos os peixes tropicais, possui uma mistura com ingredientes de alta qualidade de modo que os peixes adoram.
      `,
      categoriaAnimal: 'outros-animais',
      categoriaAba: 'promocao'
      },
  {
      imagemAtributos: "./object_imgs/produto-pote.svg",
      h2Titulo: 'Comedouro Colors Flicks Azul',
      pInformacoes: 'Indicado para cães e gatos',
      pValor: 'R$ 15.90',
      cod: '028',
      descricao: `O Comedouro Colors Flicks Azul é indicado para cães e gatos de todos tamanhos e portes. Feito em aço inox resistente, tem ótima durabilidade e sua base possui borda de borracha natural, que o torna antideslizante.
      `,
      categoriaAnimal: ['cachorro','gato'],
      categoriaAba: 'mais-vendidos'
      },
  {
      imagemAtributos: "./object_imgs/produto-bifinho.svg",
      h2Titulo: 'Petisco Mini Bifinho Keldog Carne',
      pInformacoes: 'Para seu pet, defumado e suculento',
      pValor: 'R$ 23.22',
      cod: '029',
      descricao: `O Petisco Mini Bifinho Keldog Carne é macio e saboroso! Perfeito para todos os momentos é o petisco ideal para um lanche nos passeios, demonstração de afeto e prêmio de adestramento.
      
      `,
      categoriaAnimal: ['cachorro','gato','outros-animais'],
      categoriaAba: ['promocao','lancamentos','mais-vendidos'],
      },
  ]

//////////////////////////////////////////////////////////////////////////////////////////////////
let imgProduto = document.getElementById('produto-venda')
let quantidadeProdutos = document.getElementById("quantidade-produtos");
let valorSubtotal = document.getElementById("subtotal-result");
let btnAddProduto01 = document.getElementById("add-produto");
let btnSubProduto01 = document.getElementById("rem-produto");
let valorTotal = document.getElementById("total-result")
let descricaoProduto = document.getElementById("descricao-produto")



let subtotalInfo = {
  quantidade: 0,
  valorUnidadeProduto: 0,
  valorComFrete: 0,
  valor: 0,
};

// VALOR UNIDADE//

const cdgProduto = JSON.parse(localStorage.getItem('Valuecod'))

let valorUnidade = document.getElementById("valor-unidade")
valorUnidade.innerText = todosProdutos[cdgProduto].pValor

// console.log(todosProdutos[cdgProduto].pValor.replace('R$', ''))

imgProduto.innerHTML ='<img src='+ todosProdutos[cdgProduto].imagemAtributos +' class="img-descricao" >'

quantidadeProdutos.innerText = subtotalInfo.quantidade;
valorSubtotal.innerText = "R$ " + (todosProdutos[cdgProduto].pValor.replace('R$', '') * subtotalInfo.quantidade).toFixed(2);
descricaoProduto.innerText = todosProdutos[cdgProduto].descricao

// // // -------EVENTOS --------------//

btnAddProduto01.addEventListener("click",() => {

  subtotalInfo.quantidade ++;
  quantidadeProdutos.innerText = subtotalInfo.quantidade ;
  let valor_2dec = parseFloat(todosProdutos[cdgProduto].pValor.replace('R$', '')) * subtotalInfo.quantidade;
  valorSubtotal.innerText = "R$  " + valor_2dec.toFixed(2);
  valorTotal.innerText = "R$  " + (valor_2dec + subtotalInfo.valorComFrete).toFixed(2)
  localStorage.setItem('valuePreco', (valor_2dec + subtotalInfo.valorComFrete).toFixed(2)) 

})

btnSubProduto01.addEventListener("click",() => {
    if (subtotalInfo.quantidade > 0){
      subtotalInfo.quantidade --;
      quantidadeProdutos.innerText = subtotalInfo.quantidade ;
      let valor_2dec = parseFloat(todosProdutos[cdgProduto].pValor.replace('R$', '')) * subtotalInfo.quantidade;
      valorSubtotal.innerText = "R$  " + valor_2dec.toFixed(2);
      localStorage.setItem('valuePreco', (valor_2dec + subtotalInfo.valorComFrete).toFixed(2)) 

      if (subtotalInfo.quantidade == 0){
        valorTotal.innerText ="R$  " + 0.00.toFixed(2);
      }else{
      valorTotal.innerText ="R$  " + (valor_2dec + subtotalInfo.valorComFrete).toFixed(2)

      }
    }
})


let btn = document.getElementById('fazer-pedido');

btn.addEventListener("click", function(){
    if ( subtotalInfo.quantidade > 0){

        localStorage.setItem('valueDescricao', todosProdutos[cdgProduto].h2Titulo);
        localStorage.setItem('ValueQuantidade', subtotalInfo.quantidade)
        window.location.href = "./fomulario.html"
    }


})


