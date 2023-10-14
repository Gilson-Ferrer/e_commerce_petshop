
// //BUSCAR CEP E ATRIBUIR VALOR//

function buscarCep (){
    let cep = document.getElementById("searchcep").value;
    if (cep !== ""){
        let url = "https://brasilapi.com.br/api/cep/v1/" + cep;
        let request = new XMLHttpRequest();
        request.open("GET", url);
        request.send();
  
        request.onload = function(){
            if (request.status === 200){
                let end = JSON.parse(request.response);
                document.getElementById("logradouro").value = end.street;
                document.getElementById("bairro").value = end.neighborhood;
                document.getElementById("cidade").value = end.city;
                document.getElementById("uf").value = end.state;
            }else if(request.status === 404){
                alert("cep inválido")
            }else{
                alert("Ocorreu um erro inesperado")
            }
        }
    }
  }

  
window.onload = function(){
    let ativarCep = document.getElementById("searchcep");
    ativarCep.addEventListener("blur", buscarCep);
  }

//----VALIDAÇÃO DE USUÁRIO----//

//variáveis//


let nameInput = document.getElementById("username");
let nameHelper = document.getElementById("username-helper");

let surnameInput = document.getElementById("usersurname");
let surnameHelper = document.getElementById("usersurname-helper");

let emailInput = document.getElementById("email");
let emailHelper = document.getElementById("email-helper");

let cepInput = document.getElementById("searchcep");
let cepHelper = document.getElementById("searchcep-helper");

let logradInput = document.getElementById("logradouro");
let logradHelper = document.getElementById("logradouro-helper");

let numeroInput = document.getElementById("numero");
let numeroHelper = document.getElementById("numero-helper");

let bairroInput = document.getElementById("bairro");
let bairroHelper = document.getElementById("bairro-helper");

let cidadeInput = document.getElementById("cidade");
let cidadeHelper = document.getElementById("cidade-helper");

let ufInput = document.getElementById("uf");
let ufHelper = document.getElementById("uf-helper");


function inputCorreto (input){
    input.classList.remove("error");
    input.classList.add("correct")
}


function inputIncorreto (input){
    input.classList.add("error");
    input.classList.remove("correct")
}

nameInput.addEventListener("blur", (e) =>{
    let valor = e.target.value
    if (valor.length > 2){
        inputCorreto(nameInput)
        nameHelper.innerText = ("")
    }else{
        nameHelper.innerText = ("Digite seu primeiro nome")
        inputIncorreto(nameInput)
    }
})

surnameInput.addEventListener("blur", (e) =>{
    let valor = e.target.value
    if (valor.length > 2){
        inputCorreto(surnameInput)
        surnameHelper.innerText = ("")
    }else{
        surnameHelper.innerText = ("Digite seu sobrenome completo")
        inputIncorreto(surnameInput)
    }
})

emailInput.addEventListener("blur", (e) =>{
    let valor = e.target.value
    if (valor.includes("@") && valor.includes(".com") || valor.includes(".gov") || valor.includes(".br")){
        inputCorreto(emailInput)
        emailHelper.innerText = ("")
    }else{
        emailHelper.innerText = ("Digite um email válido")
        inputIncorreto(emailInput)
    }
})

cepInput.addEventListener("blur", (e) =>{
    let valor = e.target.value
    if (valor.length == 8 || valor.length == 9){
        inputCorreto(cepInput)
        cepHelper.innerText = ("")
    }else{
        cepHelper.innerText = ("Digite um cep válido")
        inputIncorreto(cepInput)
    }
})

logradInput.addEventListener("blur", (e) =>{
    let valor = e.target.value
    if (valor.length > 0){
        inputCorreto(logradInput)
        logradHelper.innerText = ("")
    }else{
        logradHelper.innerText = ("Digite o nome da rua para entrega")
        inputIncorreto(logradInput)
    }
})

numeroInput.addEventListener("blur", (e) =>{
    let valor = e.target.value
    if (!isNaN(valor) && valor != ""){
        inputCorreto(numeroInput)
        numeroHelper.innerText = ("")
    }else{
        numeroHelper.innerText = ("Digite um número válido")
        inputIncorreto(numeroInput)
    }
})

bairroInput.addEventListener("blur", (e) =>{
    let valor = e.target.value
    if (valor.length > 2){
        inputCorreto(bairroInput)
        bairroHelper.innerText = ("")
    }else{
        bairroHelper.innerText = ("Digite o nome do bairro")
        inputIncorreto(bairroInput)
    }
})

cidadeInput.addEventListener("blur", (e) =>{
    let valor = e.target.value
    if (valor.length > 2){
        inputCorreto(cidadeInput)
        cidadeHelper.innerText = ("")
    }else{
        cidadeHelper.innerText = ("Digite o nome da cidade")
        inputIncorreto(cidadeInput)
    }
})

ufInput.addEventListener("blur", (e) =>{
    let valor = e.target.value
    if (valor.length == 2){
        inputCorreto(ufInput)
        ufHelper.innerText = ("")
    }else{
        ufHelper.innerText = ("Digite a sigla do Estado")
        inputIncorreto(ufInput)
    }
})