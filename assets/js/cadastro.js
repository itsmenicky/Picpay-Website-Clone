const url = "https://go-wash-api.onrender.com/api/user";

async function cadastroUsuario() {
  let nome_cadastro = document.getElementById("nome_cadastro");
  let cpf_cadastro = document.getElementById("cpf_cadastro");
  let email_cadastro = document.getElementById("email_cadastro");
  let data_nascimento_cadastro = document.getElementById("data_nascimento_cadastro");
  let senha_cadastro = document.getElementById("senha_cadastro");
  let checkbox_cadastro = document.getElementById("checkboxCadastro");
  let termos = 0;
  let data_campo = data_nascimento_cadastro.value;
  let data_nasc = new Date(data_campo);

  if (!checkbox_cadastro.checked) {
    alert("Por favor, aceite os termos para concluir o cadastro.");
    return;
  } else if (data_nasc.getFullYear() > 2005){
    alert("Você deve ter mais de 18 anos para criar a conta.")
    return
  }

  if (
    !nome_cadastro.value ||
    !cpf_cadastro.value ||
    !email_cadastro.value ||
    !data_nascimento_cadastro.value ||
    !senha_cadastro.value
  ) {
    alert("Por favor, preencha todos os campos.");
    if (!nome_cadastro.value) {
      nome_cadastro.style.borderColor = "red";
    } else {
      nome_cadastro.style.borderColor = "green";
    }
    if (!cpf_cadastro.value) {
      cpf_cadastro.style.borderColor = "red";
    } else {
      cpf_cadastro.style.borderColor = "green";
    }
    if (!email_cadastro.value) {
      email_cadastro.style.borderColor = "red";
    } else {
      email_cadastro.style.borderColor = "green";
    }
    if (!data_nascimento_cadastro.value) {
      data_nascimento_cadastro.style.borderColor = "red";
    } else {
      data_nascimento_cadastro.style.borderColor = "green";
    }
    if (!senha_cadastro.value) {
      senha_cadastro.style.borderColor = "red";
    } else {
      senha_cadastro.style.borderColor = "green";
    }
    return;
  }

  let response = await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      name: nome_cadastro.value,
      email: email_cadastro.value,
      user_type_id: 1,
      password: senha_cadastro.value,
      cpf_cnpj: cpf_cadastro.value,
      terms: termos,
      birthday: data_nascimento_cadastro.value,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    let responseError = await response.json();

    if (responseError.data?.errors.cpf_cnpj) {
      alert("O CPF informado já está em uso.");
    } else if (responseError.data?.errors.password) {
      alert("A senha precisa conter no mínimo 6 dígitos.");
    } else if (responseError.data?.errors.email) {
      alert("Email já em uso!");
    } else if (responseError.data?.errors) {
      alert("CPF inválido");
    }
  } else {
    alert("Cadastro feito com sucesso");
    window.location.href = "login.html";
  }
}
