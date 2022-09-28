function enviar() {
    const nome = document.querySelector("#form4Example1");
    const email = document.querySelector("#form4Example2");
    const mensagem = document.querySelector("#form4Example3");

    if(nome.value == "" || email.value == "" || mensagem.value == "") {
        alert("Preencha todos os campos antes de enviar!")
        return
    }

    nome.value = ""
    email.value = ""
    mensagem.value = ""

    
}

function modoEscuro() {
    const botao = document.querySelector("#flexSwitchCheckDefault")

    if(botao.checked){
        document.body.style.backgroundColor = '#202020'
        document.body.style.color = '#fff'
    }
    else{
        document.body.style.backgroundColor = '#fff'
        document.body.style.color = '#000'
    }
}

    
