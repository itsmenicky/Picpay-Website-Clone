let enderecourl = 'https://go-wash-api.onrender.com/api/auth/address';
let username_header = document.getElementById('username-header');
let username_card = document.getElementById('username-card');
async function endereco(){
    
    let tokenUser = JSON.parse(localStorage.getItem("user")).access_token;

    let resposta = await fetch(enderecourl, {
        method:"GET",
        headers:{
            "Authorization": "Bearer "+tokenUser
        }
    })

    let respostaApi = await resposta.json();
    console.log(respostaApi)
}

function setUsername(){
    let item = localStorage.getItem('user');
    let user = JSON.parse(item)
    username_header.textContent = `Olá ${user.user.name}!`
    username_card.textContent = user.user.name
}

async function cadastrarEndereco(){
    let url= 'https://go-wash-api.onrender.com/api/auth/address';

    let nome = document.getElementById("nome_da_rua_cadastro").value;
    let cep = document.getElementById("cep_cadastro").value;
    let endereco = document.getElementById("endereco_cadastro").value;
    let numero = document.getElementById("numero_rua_cadastro").value;

    let user = localStorage.getItem('user');
    let token = JSON.parse(user).access_token;

    let ApiEndereco =  await fetch( url,{
        method:"POST",
        body:JSON.stringify({
            "title":nome,
            "cep": cep,
            "address": endereco,
            "number": numero,
            "complement": ""
        }),
        headers:{
            'Content-Type': 'application/json',
            "Authorization": "Bearer "+token

        }
    });
    
    window.location.href="home.html";
}

endereco()
setUsername()
