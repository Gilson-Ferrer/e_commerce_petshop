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
                corretos.cep = true;
                let end = JSON.parse(request.response);
                document.getElementById("local-frete").value = end.state;
                let localDoFrete = document.getElementById("local-frete").value;
                let valorDoFrete = document.getElementById("valor-frete");
                if (localDoFrete == "SP"){
                    valorDoFrete.innerText = "Grátis"
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

  // EVITA O ENVIO SEM O PREENCHIMENTO DO CEP// 

let btnSubmit = document.querySelector('#fazer-pedido')
let corretos = {
    cep: false,
}

btnSubmit.addEventListener("click", (e) =>{  
    if(corretos.cep == false){
        e.preventDefault()
        alert("Os campos com * deverão ser preenchidos")
    }
})