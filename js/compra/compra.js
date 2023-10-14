



// MOSTRAR CEP DE ENTREGA //

let mostrarCep = document.getElementById('cep-entrega');
mostrarCep.textContent = localStorage.getItem('valueText');


// MOSTRAR PREÇO FINAL  // 

let mostrarPrecoFinal = document.getElementById('valor-Total-Cr');
mostrarPrecoFinal.textContent = localStorage.getItem('valuePreco');