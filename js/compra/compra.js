
//MOSTRAR AGRADECIMENTO PELA COMPRA //
const user = localStorage.getItem('valueName')
let mostrarAgradecimentos = document.querySelector('.agradecimento');
mostrarAgradecimentos.innerHTML = `Obrigado ${user}, o seu pedido está sendo processado.` 

// MOSTRAR DESCRIÇÃO PRODUTO //


let mostrarDescricao = document.getElementById('mostrar-descricao');
let descricaoProd = localStorage.getItem('valueDescricao');
let mostrarCodigo = localStorage.getItem('Valuecod')
let mostrarQtd = localStorage.getItem('ValueQuantidade')
let mostrarPagamento = localStorage.getItem('valuePagamento')
let mostrarEmail = localStorage.getItem('ValueEmail')
mostrarDescricao.innerHTML = `<br><h4>${descricaoProd}</h4><br>Código: ${mostrarCodigo}<br>Quantidade de ítens: ${mostrarQtd}<br><br><br>
<h4>Forma de pagamento</h4><br>${mostrarPagamento}<br><br><br><h4>Realize o pagamento pelo link que enviamos para o email:</h4><br><h6>${mostrarEmail}</h6><br>
`

// MOSTRAR CEP DE ENTREGA //

let mostrarCep = document.getElementById('cep-entrega');
mostrarCep.textContent = localStorage.getItem('valueText');


// MOSTRAR PREÇO FINAL  // 

let mostrarPrecoFinal = document.getElementById('valor-Total-Cr');
mostrarPrecoFinal.textContent = localStorage.getItem('valuePreco');

