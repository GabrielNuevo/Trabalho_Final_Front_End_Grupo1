function enviar() {
    const nome = document.querySelector("#form4Example1").value;
    const email = document.querySelector("#form4Example2").value;
    const mensagem = document.querySelector("#form4Example3").value;

    if(nome.value == "" || email.value == "" || mensagem.value == "") {
        alert("Preencha todos os campos antes de enviar!")
        return
    }

    nome.value = ""
    email.value = ""
    mensagem.value = ""
}