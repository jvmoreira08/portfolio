// troca tema claro e escuro

function trocarTema(){

document.body.classList.toggle("dark")

}

// validação formulário

document
.getElementById("formContato")
.addEventListener("submit", function(event){

event.preventDefault()

let nome = document.getElementById("nome").value 
let email = document.getElementById("email").value 
let mensagem = document.getElementById("mensagem").value

if(nome === "" || email === "" || mensagem === ""){
alert("Preencha todos os campos")
return
}

let emailValido = /\S+@\S+\.\S+/

if(!emailValido.test(email)){
alert("Email inválido")
return
}

alert("Mensagem enviada com sucesso!")

document.getElementById("formContato").reset()

})