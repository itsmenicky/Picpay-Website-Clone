let enderecourl = 'https://go-wash-api.onrender.com/api/auth/address';
let username_header = document.getElementById('username-header');
let username_card = document.getElementById('username-card');
let modal = document.getElementById("cadastro-endereco");
let blurEffect = document.getElementById("overlay");

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
    return setEnderecos(respostaApi);
}

function setUsername(){
    let item = localStorage.getItem('user');
    let user = JSON.parse(item)
    username_header.textContent = `Olá ${user.user.name}!`
    username_card.textContent = user.user.name
}

function abrirPainel(){
    modal.style.display = "block";
    setTimeout(() => {
        modal.style.transform = "translateX(0)";
    }, 10);
    blurEffect.style.display = "inherit";
    document.body.style = "overflow-y: hidden;"
}

function fecharPainel(){
    modal.style.transform = "translateX(100%)";
    modal.style.display = "none";
    blurEffect.style.display = "none";
    document.body.style = "overflow-y: auto;"
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

function setEnderecos(respostaApi){
    let enderecos_titulo = document.getElementById('endereco-titulo');
    let enderecos_cep = document.getElementById('endereco-cep');
    let enderecos_endereco = document.getElementById('endereco-endereco');
    let respostaAPI = respostaApi

    for(let i=0;i<respostaAPI.data.length;i++){
        let li_titulo = document.createElement('li');
        let li_cep = document.createElement('li');
        let li_endereco = document.createElement('li');
        li_titulo.append(respostaAPI.data[i].title)
        li_cep.append(respostaAPI.data[i].cep)
        li_endereco.append(respostaAPI.data[i].address)
        enderecos_titulo.append(li_titulo)
        enderecos_cep.append(li_cep)
        enderecos_endereco.append(li_endereco)
    }
}

endereco()
setUsername()
