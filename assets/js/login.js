const loginUrl = 'https://api-go-wash-efc9c9582687.herokuapp.com/api/login';

async function fazerLogin() {
    let email = document.getElementById('emailCadastro').value;
    let senha = document.getElementById('senhaCadastro').value;

    // Verificar se algum campo está vazio
    if (!email || !senha) {
        alert("Por favor, preencha todos os campos.");
        if (!emailCadastro.value) {
            emailCadastro.style.borderColor = "red";
        } else {
            emailCadastro.style.borderColor = "green";
        }

        if (!senhaCadastro.value) {
            senhaCadastro.style.borderColor = "red";
        } else {
            senhaCadastro.style.borderColor = "green";
        }
        return;
    }

    let respostaApi = await fetch(loginUrl, {
        method: "POST",
        body: JSON.stringify({
            "email": emailCadastro.value,
            "password": senhaCadastro.value,
            "user_type_id":1,
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!respostaApi.ok) {
        const respostaErro = await respostaApi.json();

        if (respostaErro.error) {
            alert(respostaErro.error);
        } else {
            alert("Erro desconhecido ao fazer login");
        }
    } else {
        alert("Login bem sucedido");
        //window.location.href = "pagina_principal.html";
    }
}