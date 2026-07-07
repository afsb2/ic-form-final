function validarFormulario() {

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    if (nome == "") {
        alert("O nome não pode estar vazio.");
        return false;
    }

    if (!email.includes("@")) {
        alert("O email deve conter @.");
        return false;
    }

    if (senha.length < 8) {
        alert("A senha deve ter pelo menos 8 caracteres.");
        return false;
    }

    alert("Formulário enviado com sucesso!");
    return true;
}