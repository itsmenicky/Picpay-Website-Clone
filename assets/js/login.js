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

    if (!respostaApi.ok) {
        let respostaErro = await respostaApi.json();

        if (respostaErro.data?.errors) {
            alert(respostaErro.data.errors);
        } else {
            alert("Erro desconhecido ao fazer login");
        }
    } else {

        alert("Login bem sucedido");
        //window.location.href = "pagina_principal.html";
    }

    localStorage.setItem('user', JSON.stringify(respostaApi))

    console.log(respostaApi);
}