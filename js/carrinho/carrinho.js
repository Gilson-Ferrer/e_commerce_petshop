


//BUSCAR CEP E ATRIBUIR VALOR//

function buscarCep (){
  let cep = document.getElementById("cep").value;
  if (cep !== ""){
      let url = "https://brasilapi.com.br/api/cep/v1/" + cep;
      let request = new XMLHttpRequest();
      request.open("GET", url);
      request.send();

      request.onload = function(){
          if (request.status === 200){
              let end = JSON.parse(request.response);
              document.getElementById("local-frete").value = end.state;
              let localDoFrete = document.getElementById("local-frete").value;
              let valorDoFrete = document.getElementById("valor-frete");
              if (localDoFrete == "SP"){
                  valorDoFrete.innerText = "R$  " +  0.00.toFixed(2)
                  subtotalInfo.valorComFrete = 0.00
              }
              
              else if(localDoFrete == "RJ" ||
                  localDoFrete == "PR" ||
                  localDoFrete == "MS" ||
                  localDoFrete == "GO" ||
                  localDoFrete == "MG" ){
                  valorDoFrete.innerText = "R$  " + 79.90.toFixed(2)
                  subtotalInfo.valorComFrete = 79.90
              }
              
              else if(localDoFrete == "SC" ||
                  localDoFrete == "RS" ||
                  localDoFrete == "ES"){
                  valorDoFrete.innerText = "R$  " + 114.80.toFixed(2)
                  subtotalInfo.valorComFrete = 114.80
              }

              else if(localDoFrete == "MT" ||
                  localDoFrete == "TO" ||
                  localDoFrete == "BA"){
                  valorDoFrete.innerText = "R$  " +  145.50.toFixed(2)
                  subtotalInfo.valorComFrete = 145.50
              }

              else if(localDoFrete == "RO" ||
                  localDoFrete == "AM" ||
                  localDoFrete == "PA" ||
                  localDoFrete == "MA" ||
                  localDoFrete == "PI" ||
                  localDoFrete == "PE" ||
                  localDoFrete == "AL" ||
                  localDoFrete == "SE"){
                  valorDoFrete.innerText = "R$  " +  187.30.toFixed(2)
                  subtotalInfo.valorComFrete = 187.30
              }

              else if(localDoFrete == "PB" ||
                  localDoFrete == "RN" ||
                  localDoFrete == "CE" ||
                  localDoFrete == "AP" ||
                  localDoFrete == "RR" ||
                  localDoFrete == "AC"){
                  valorDoFrete.innerText = "R$  " +  220.17.toFixed(2)
                  subtotalInfo.valorComFrete = 220.17
              }

          }else if(request.status === 404){
              alert("cep inválido")
          }else{
              alert("Ocorreu um erro inesperado")
          }
      }
  }
}

window.onload = function(){
  let txtCep = document.getElementById("cep");
  txtCep.addEventListener("blur", buscarCep);
}



let quantidadeProdutos = document.getElementById("quantidade-produtos");
let valorSubtotal = document.getElementById("subtotal-result");
let btnAddProduto01 = document.getElementById("add-produto");
let btnSubProduto01 = document.getElementById("rem-produto");
let valorTotal = document.getElementById("total-result")
// let valorFreteLocal = document.getElementById("valor-frete").value;


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
})

btnSubProduto01.addEventListener("click",() => {
    if (subtotalInfo.quantidade > 0){
      subtotalInfo.quantidade --;
      quantidadeProdutos.innerText = subtotalInfo.quantidade ;
      let valor_2dec = subtotalInfo.valorUnidadeProduto * subtotalInfo.quantidade;
      valorSubtotal.innerText = "R$  " + valor_2dec.toFixed(2);
      if (subtotalInfo.quantidade == 0){
        valorTotal.innerText ="R$  " + 0.00.toFixed(2);
      }else{
      valorTotal.innerText ="R$  " + (valor_2dec + subtotalInfo.valorComFrete).toFixed(2)
      }
    }
})

