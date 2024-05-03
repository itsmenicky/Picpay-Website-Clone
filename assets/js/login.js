const loginUrl = 'https://go-wash-api.onrender.com/api/login';

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

    let resposta = await respostaApi.json();

    if (!respostaApi.ok) {

        if (resposta.data?.errors) {
            alert(resposta.data.errors);
        } else {
            alert("Erro desconhecido ao fazer login");
        }
    } else {
        localStorage.setItem('user', JSON.stringify(resposta))
        alert("Login bem sucedido");
        window.location.href = "home.html";
    }
}