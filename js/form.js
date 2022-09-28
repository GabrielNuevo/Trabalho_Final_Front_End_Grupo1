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

    
