
let quantidadeProdutos = document.getElementById("quantidade-produtos");
let valorSubtotal = document.getElementById("subtotal-result");
let btnAddProduto01 = document.getElementById("add-produto");
let btnSubProduto01 = document.getElementById("rem-produto");
let valorTotal = document.getElementById("total-result")


let subtotalInfo = {
  quantidade: 0,
  valorUnidadeProduto: 19.99,
  valorComFrete: 0,
  valor: 0,
};

// VALOR UNIDADE//

let valorUnidade = document.getElementById("valor-unidade")
valorUnidade.innerText = "R$  " + subtotalInfo.valorUnidadeProduto

quantidadeProdutos.innerText = subtotalInfo.quantidade;
valorSubtotal.innerText = "R$  " +subtotalInfo.valor.toFixed(2);


// // // -------EVENTOS --------------//

btnAddProduto01.addEventListener("click",() => {

  subtotalInfo.quantidade ++;
  quantidadeProdutos.innerText = subtotalInfo.quantidade ;
  let valor_2dec = subtotalInfo.valorUnidadeProduto * subtotalInfo.quantidade;
  valorSubtotal.innerText = "R$  " + valor_2dec.toFixed(2);
  valorTotal.innerText ="R$  " + (valor_2dec + subtotalInfo.valorComFrete).toFixed(2) 
  localStorage.setItem('valuePreco', (valor_2dec + subtotalInfo.valorComFrete).toFixed(2)) 

})

btnSubProduto01.addEventListener("click",() => {
    if (subtotalInfo.quantidade > 0){
      subtotalInfo.quantidade --;
      quantidadeProdutos.innerText = subtotalInfo.quantidade ;
      let valor_2dec = subtotalInfo.valorUnidadeProduto * subtotalInfo.quantidade;
      valorSubtotal.innerText = "R$  " + valor_2dec.toFixed(2);
      localStorage.setItem('valuePreco', (valor_2dec + subtotalInfo.valorComFrete).toFixed(2)) 

      if (subtotalInfo.quantidade == 0){
        valorTotal.innerText ="R$  " + 0.00.toFixed(2);
      }else{
      valorTotal.innerText ="R$  " + (valor_2dec + subtotalInfo.valorComFrete).toFixed(2)

      }
    }
})





