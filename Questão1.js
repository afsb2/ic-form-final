function validarFormulario() {

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    // Validação do nome
    if (nome.trim() == "") {
        alert("Erro: o campo Nome não pode estar vazio.");
        return false;
    }

    // Validação do email
    if (email.trim() == "") {
        alert("Erro: o campo Email não pode estar vazio.");
        return false;
    }

    if (!email.includes("@")) {
        alert("Erro: o email deve conter pelo menos um '@'.");
        return false;
    }

    // Validação da senha
    if (senha.trim() == "") {
        alert("Erro: o campo Senha não pode estar vazio.");
        return false;
    }

    if (senha.length < 8) {
        alert("Erro: a senha deve possuir no mínimo 8 caracteres.");
        return false;
    }

    alert("Formulário enviado com sucesso!");
    return true;
}
